a.d(t, { t: () => C }), a(415506);
var n = a(54381),
    i = a(473749),
    r = a(512722),
    l = a.n(r),
    s = a(478677),
    o = a(481060),
    c = a(570140),
    d = a(275759),
    u = a(202120),
    x = a(600164),
    m = a(710845),
    h = a(424071),
    p = a(388032),
    N = a(926375);
let g = new m.Z("TwoWayLink");
function C(e) {
    let {
            platformType: t,
            isWaitingForConnection: a,
            onWaitingForConnection: r,
            expectedCallbackState: m,
            onAuthToken: C,
            onError: j,
            onClose: v,
            img: f,
            title: k,
            body: b,
            redirectDestination: E,
        } = e,
        T = i.useCallback(async () => {
            let e;
            try {
                if (((e = await (0, u.H)(t, { twoWayLinkType: s.g.DESKTOP })), null == e))
                    throw Error("missing authorizeURL");
            } catch (e) {
                g.error("Error opening provider authorize page", e), j();
                return;
            }
            let { state: a } = (0, d.xp)(e);
            l()(null != a, "Authorize URL state query parameter must be present"), null == r || r(a);
        }, [t, j, r]),
        O = i.useCallback(
            (e) => {
                let { callbackCode: a, callbackState: n } = e;
                if (n !== m) return void g.warn("".concat(t, " link: received mismatching callback state!"));
                C({
                    callbackCode: a,
                    callbackState: n,
                });
            },
            [t, m, C],
        );
    return (
        i.useEffect(
            () => (
                c.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", O),
                () => {
                    c.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", O);
                }
            ),
            [O],
        ),
        (0, n.jsxs)(h.Z, {
            children: [
                (0, n.jsxs)(o.xBx, {
                    "data-migration-pending": !0,
                    direction: x.Z.Direction.VERTICAL,
                    className: N.header,
                    separator: !1,
                    children: [
                        (0, n.jsx)(o.Text, {
                            className: N.stepHeader,
                            variant: "text-xs/bold",
                            color: "text-default",
                            children: p.intl.format(p.t.fHz6eR, {
                                number: 1,
                                total: 2,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: N.illustration,
                            children: [f, " "],
                        }),
                        (0, n.jsx)(o.Heading, {
                            className: N.title,
                            variant: "heading-xl/extrabold",
                            children: k,
                        }),
                        null != v &&
                            (0, n.jsx)(o.olH, {
                                className: N.closeButton,
                                onClick: v,
                            }),
                    ],
                }),
                (0, n.jsxs)(o.hzk, {
                    "data-migration-pending": !0,
                    className: N.body,
                    paddingFix: !1,
                    children: [
                        (0, n.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "text-default",
                            children: b,
                        }),
                        !a &&
                            null != E &&
                            (0, n.jsx)(o.Text, {
                                tag: "p",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: p.intl.format(p.t.XhlYYn, { redirectUrl: E }),
                            }),
                    ],
                }),
                (0, n.jsx)(o.mzw, {
                    "data-migration-pending": !0,
                    className: N.footer,
                    children: (0, n.jsx)(o.Button, {
                        variant: a ? "secondary" : "primary",
                        text: p.intl.format(a ? p.t["8Laby+"] : p.t["6623tt"], {
                            popoutWindowIcon: {},
                            popoutWindowIconHook: () =>
                                (0, n.jsx)(o.rgF, {
                                    color: "currentColor",
                                    className: N.launchIcon,
                                    size: "xs",
                                }),
                        }),
                        onClick: T,
                        fullWidth: !0,
                    }),
                }),
            ],
        })
    );
}
