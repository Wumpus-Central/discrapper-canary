var i = n(477900),
    r = n(582128),
    a = n(196765),
    s = n(935399),
    l = n(855986),
    o = n(506774),
    d = n(406810),
    c = n(606096),
    u = n(683063),
    _ = n(646514),
    E = n(765178),
    A = n(85109),
    h = n(650583),
    f = n(792996);
let I = "InboxLastOpenedAt",
    p = (0, a.v)(() => ({ toast: null, isVisible: !1, isPulsing: !1, inboxLastOpenedAt: o.w.get(I, 0) ?? 0 }));
function m() {
    (o.w.set(I, Date.now()), p.setState({ inboxLastOpenedAt: Date.now() }));
}
n.d(
    t,
    {},
    {
        $n: function (e) {
            let { anchorRef: t } = e,
                n = p((e) => e.toast),
                a = p((e) => e.isVisible),
                o = p((e) => e.inboxLastOpenedAt),
                E = (0, l.bG)([A.A], () => A.A.getOverdueMessageReminderCount()),
                I = (0, l.bG)([A.A], () => A.A.getMostRecentOverdueDueAt()),
                g = E > 0 && I > o;
            (r.useEffect(() => {
                if (null == n) return;
                let e = setTimeout(() => p.setState({ isPulsing: !1 }), 600),
                    t = setTimeout(() => p.setState({ isVisible: !1 }), 5e3);
                return () => {
                    (clearTimeout(e), clearTimeout(t));
                };
            }, [n]),
                (0, s.l0)(() => p.setState({ toast: null, isVisible: !1, isPulsing: !1 })),
                r.useEffect(() => {
                    if (g)
                        return (
                            document.addEventListener("keydown", e),
                            () => {
                                document.removeEventListener("keydown", e);
                            }
                        );
                    function e(e) {
                        e.key === h.dh.ESCAPE && m();
                    }
                }, [g]));
            let T = null != n && (a || !g) ? n : null,
                S = null != T ? T.message : f.intl.formatToPlainString(f.t.yBmFPA, { count: E }),
                N = null != T ? ("clock" === T.icon ? d.ClockIcon : c.BookmarkIcon) : d.ClockIcon;
            return (0, i.jsx)(u.u, {
                anchorRef: t,
                asContainer: !0,
                forceOpen: (null != n && a) || g,
                hideOnClick: !1,
                position: "bottom",
                align: "right",
                caretConfig: { align: "end" },
                asset: (0, i.jsx)(N, {
                    size: "sm",
                    color: null != T ? _.A.colors.STATUS_POSITIVE : _.A.colors.TEXT_STRONG,
                }),
                assetSize: 20,
                body: S,
                ariaHidden: !0,
                children: null,
            });
        },
        Dc: function (e) {
            (p.setState({ toast: { ...e }, isVisible: !0, isPulsing: !0 }), E.O.announce(e.message, "polite"));
        },
        KC: function () {
            return p((e) => e.isPulsing);
        },
        Vc: m,
    },
);
