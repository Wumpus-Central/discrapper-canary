n.d(t, { $: () => f, A: () => p });
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
    m = n(576420),
    I = n(610358),
    E = n(652215),
    A = n(952866);
function f() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = (0, o.b4)(),
        I = n?.id,
        f = n?.altId,
        p = (0, r.bG)([s.default], () => s.default.getCurrentUser()) ?? null,
        S = m.Ay.useField("activeTab"),
        N = m.Ay.useField("setActiveTab"),
        x = i.useCallback(
            (e) => {
                e !== S &&
                    (N(e),
                    (0, a.YX)(E.uss.FRIENDS, {
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
            [S, N],
        ),
        T = (0, o.xl)(null != f ? f : I);
    return (0, l.jsxs)("div", {
        className: A.kL,
        children: [
            (0, l.jsx)(c.b, {
                currentUser: p,
                activity: T,
                currentGameName: n?.name ?? null,
                activeTab: S,
                onTabChange: x,
            }),
            (0, l.jsx)("div", {
                className: A.Qs,
                children:
                    S === u.x.FRIENDS
                        ? (0, l.jsx)(d.F, { onPrimaryAction: e, onContextMenu: t })
                        : S === u.x.MESSAGES
                          ? (0, l.jsx)(h.t, { onPrimaryAction: e, onContextMenu: t })
                          : S === u.x.VOICE
                            ? (0, l.jsx)(g.T, { onPrimaryAction: e, onContextMenu: t })
                            : null,
            }),
        ],
    });
}
let p = i.memo(function (e) {
    let { locked: t } = e,
        { handlePrimaryAction: n, handleContextMenu: i } = (0, I.W)();
    return t ? null : (0, l.jsx)(f, { onPrimaryAction: n, onContextMenu: i });
});
