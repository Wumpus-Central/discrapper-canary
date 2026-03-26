t.d(e, { b: () => C });
var n = t(627968),
    r = t(64700),
    s = t(284009),
    i = t.n(s),
    l = t(13202),
    c = t(397927),
    o = t(73153),
    d = t(370480),
    x = t(738104),
    m = t(235986),
    u = t(626584),
    N = t(141241),
    h = t(985018),
    p = t(58123);
let j = new u.A("TwoWayLink");
function C(a) {
    let {
            platformType: e,
            isWaitingForConnection: t,
            onWaitingForConnection: s,
            expectedCallbackState: u,
            onAuthToken: C,
            onError: g,
            onClose: b,
            img: v,
            title: E,
            body: f,
            redirectDestination: k,
        } = a,
        A = r.useCallback(async () => {
            let a;
            try {
                if (((a = await (0, x.d)(e, { twoWayLinkType: l.I.DESKTOP })), null == a))
                    throw Error("missing authorizeURL");
            } catch (a) {
                j.error("Error opening provider authorize page", a), g();
                return;
            }
            let { state: t } = (0, d.vA)(a);
            i()(null != t, "Authorize URL state query parameter must be present"), s?.(t);
        }, [e, g, s]),
        T = r.useCallback(
            (a) => {
                let { callbackCode: t, callbackState: n } = a;
                n !== u
                    ? j.warn(`${e} link: received mismatching callback state!`)
                    : C({ callbackCode: t, callbackState: n });
            },
            [e, u, C],
        );
    return (
        r.useEffect(
            () => (
                o.h.subscribe("USER_CONNECTIONS_LINK_CALLBACK", T),
                () => {
                    o.h.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", T);
                }
            ),
            [T],
        ),
        (0, n.jsxs)(N.A, {
            children: [
                (0, n.jsxs)(c.rQ0, {
                    "data-migration-pending": !0,
                    direction: m.A.Direction.VERTICAL,
                    className: p.wx,
                    separator: !1,
                    children: [
                        (0, n.jsx)(c.Text, {
                            className: p.u1,
                            variant: "text-xs/bold",
                            color: "text-default",
                            children: h.intl.format(h.t.fHz6eR, { number: 1, total: 2 }),
                        }),
                        (0, n.jsxs)("div", { className: p.bm, children: [v, " "] }),
                        (0, n.jsx)(c.Heading, { className: p.DD, variant: "heading-xl/extrabold", children: E }),
                        null != b && (0, n.jsx)(c.s_y, { className: p.b, onClick: b }),
                    ],
                }),
                (0, n.jsxs)(c.$mQ, {
                    "data-migration-pending": !0,
                    className: p.rf,
                    paddingFix: !1,
                    children: [
                        (0, n.jsx)(c.Text, { tag: "p", variant: "text-md/normal", color: "text-default", children: f }),
                        !t &&
                            null != k &&
                            (0, n.jsx)(c.Text, {
                                tag: "p",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: h.intl.format(h.t.XhlYYn, { redirectUrl: k }),
                            }),
                    ],
                }),
                (0, n.jsx)(c.jlY, {
                    "data-migration-pending": !0,
                    className: p.qr,
                    children: (0, n.jsx)(c.Button, {
                        variant: t ? "secondary" : "primary",
                        text: h.intl.format(t ? h.t["8Laby+"] : h.t["6623tt"], {
                            popoutWindowIcon: {},
                            popoutWindowIconHook: () =>
                                (0, n.jsx)(c.tfB, { color: "currentColor", className: p.LE, size: "xs" }),
                        }),
                        onClick: A,
                        fullWidth: !0,
                    }),
                }),
            ],
        })
    );
}
