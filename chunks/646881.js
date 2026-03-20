n.d(t, { $: () => m, A: () => S });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(287809),
    a = n(810412),
    u = n(914853),
    o = n(243612),
    d = n(640490),
    c = n(755588),
    h = n(222870),
    g = n(180720),
    I = n(576420),
    A = n(610358),
    f = n(652215),
    E = n(364495);
function m() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = (0, o.b4)(),
        A = n?.id,
        m = n?.altId,
        S = (0, r.bG)([s.default], () => s.default.getCurrentUser()) ?? null,
        _ = I.Ay.useField("activeTab"),
        p = I.Ay.useField("setActiveTab"),
        N = i.useCallback(
            (e) => {
                e !== _ &&
                    (p(e),
                    (0, a.YX)(f.uss.FRIENDS, {
                        type: a.Z5.TAB_SELECTED,
                        value: (function (e) {
                            switch (e) {
                                case u.x.FRIENDS:
                                    return a.IP.FRIEND_TAB_SELECTED;
                                case u.x.MESSAGES:
                                    return a.IP.MESSAGES_TAB_SELECTED;
                                case u.x.VOICE:
                                    return a.IP.VOICE_TAB_SELECTED;
                                default:
                                    return a.IP.FRIEND_TAB_SELECTED;
                            }
                        })(e),
                    }));
            },
            [_, p],
        ),
        T = (0, o.xl)(null != m ? m : A);
    return (0, l.jsxs)("div", {
        className: E.kL,
        children: [
            (0, l.jsx)(c.b, {
                currentUser: S,
                activity: T,
                currentGameName: n?.name ?? null,
                activeTab: _,
                onTabChange: N,
            }),
            (0, l.jsx)("div", {
                className: E.Qs,
                children:
                    _ === u.x.FRIENDS
                        ? (0, l.jsx)(d.F, { onPrimaryAction: e, onContextMenu: t })
                        : _ === u.x.MESSAGES
                          ? (0, l.jsx)(h.t, { onPrimaryAction: e, onContextMenu: t })
                          : _ === u.x.VOICE
                            ? (0, l.jsx)(g.T, { onPrimaryAction: e, onContextMenu: t })
                            : null,
            }),
        ],
    });
}
let S = i.memo(function (e) {
    let { locked: t } = e,
        { handlePrimaryAction: n, handleContextMenu: i } = (0, A.W)();
    return t ? null : (0, l.jsx)(m, { onPrimaryAction: n, onContextMenu: i });
});
