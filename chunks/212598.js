a.d(t, { t: () => j }), a(415506);
var n = a(54381),
    r = a(473749),
    i = a(512722),
    l = a.n(i),
    s = a(478677),
    o = a(755721),
    c = a(481060),
    d = a(570140),
    u = a(275759),
    x = a(202120),
    m = a(600164),
    h = a(710845),
    N = a(424071),
    p = a(388032),
    g = a(926375);
let C = new h.Z("TwoWayLink");
function j(e) {
    let {
            platformType: t,
            isWaitingForConnection: a,
            onWaitingForConnection: i,
            expectedCallbackState: h,
            onAuthToken: j,
            onError: v,
            onClose: f,
            img: b,
            title: k,
            body: E,
            redirectDestination: T,
        } = e,
        O = r.useCallback(async () => {
            let e;
            try {
                if (((e = await (0, x.H)(t, { twoWayLinkType: s.g.DESKTOP })), null == e))
                    throw Error("missing authorizeURL");
            } catch (e) {
                C.error("Error opening provider authorize page", e), v();
                return;
            }
            let { state: a } = (0, u.xp)(e);
            l()(null != a, "Authorize URL state query parameter must be present"), null == i || i(a);
        }, [t, v, i]),
        R = r.useCallback(
            (e) => {
                let { callbackCode: a, callbackState: n } = e;
                if (n !== h) return void C.warn("".concat(t, " link: received mismatching callback state!"));
                j({
                    callbackCode: a,
                    callbackState: n,
                });
            },
            [t, h, j],
        );
    return (
        r.useEffect(
            () => (
                d.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", R),
                () => {
                    d.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", R);
                }
            ),
            [R],
        ),
        (0, n.jsxs)(N.Z, {
            children: [
                (0, n.jsxs)(c.xBx, {
                    "data-migration-pending": !0,
                    direction: m.Z.Direction.VERTICAL,
                    className: g.header,
                    separator: !1,
                    children: [
                        (0, n.jsx)(c.Text, {
                            className: g.stepHeader,
                            variant: "text-xs/bold",
                            color: "text-default",
                            children: p.intl.format(p.t.fHz6eR, {
                                number: 1,
                                total: 2,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: g.illustration,
                            children: [b, " "],
                        }),
                        (0, n.jsx)(c.Heading, {
                            className: g.title,
                            variant: "heading-xl/extrabold",
                            children: k,
                        }),
                        null != f &&
                            (0, n.jsx)(c.olH, {
                                className: g.closeButton,
                                onClick: f,
                            }),
                    ],
                }),
                (0, n.jsxs)(c.hzk, {
                    "data-migration-pending": !0,
                    className: g.body,
                    paddingFix: !1,
                    children: [
                        (0, n.jsx)(c.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "text-default",
                            children: E,
                        }),
                        !a &&
                            null != T &&
                            (0, n.jsx)(c.Text, {
                                tag: "p",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: p.intl.format(p.t.XhlYYn, { redirectUrl: T }),
                            }),
                    ],
                }),
                (0, n.jsx)(c.mzw, {
                    "data-migration-pending": !0,
                    className: g.footer,
                    children: (0, n.jsxs)(o.zx, {
                        className: g.footerButton,
                        color: a ? o.zx.Colors.PRIMARY : o.zx.Colors.BRAND,
                        onClick: O,
                        children: [
                            a ? p.intl.string(p.t["5911Lb"]) : p.intl.string(p.t["3PatSz"]),
                            (0, n.jsx)(c.rgF, {
                                color: "currentColor",
                                className: g.launchIcon,
                                size: "xs",
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
