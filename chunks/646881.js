n.d(t, {
    $: () => A,
    A: () => y,
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(375492),
    a = n(287809),
    o = n(810412),
    u = n(914853),
    c = n(243612),
    d = n(640490),
    h = n(755588),
    g = n(222870),
    f = n(180720),
    p = n(576420),
    I = n(610358),
    m = n(652215),
    E = n(553777);

function A() {
    var e, t, n;
    let { onPrimaryAction: I, onContextMenu: A } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        y = (0, c.b4)(),
        S = null == y ? void 0 : y.id,
        v = null == y ? void 0 : y.altId,
        O = null != (e = (0, i.bG)([a.default], () => a.default.getCurrentUser())) ? e : null,
        b = null != v ? v : S,
        N = p.Ay.useField("activeTab"),
        T = p.Ay.useField("setActiveTab"),
        _ = r.useCallback(
            (e) => {
                e !== N &&
                    (T(e),
                    (0, o.YX)(m.uss.FRIENDS, {
                        type: o.Z5.TAB_SELECTED,
                        value: (function (e) {
                            switch (e) {
                                case u.x.FRIENDS:
                                    return o.IP.FRIEND_TAB_SELECTED;
                                case u.x.MESSAGES:
                                    return o.IP.MESSAGES_TAB_SELECTED;
                                case u.x.VOICE:
                                    return o.IP.VOICE_TAB_SELECTED;
                                default:
                                    return o.IP.FRIEND_TAB_SELECTED;
                            }
                        })(e),
                    }));
            },
            [N, T],
        ),
        C = null != (t = (0, i.bG)([s.A], () => (null == b ? null : s.A.getApplicationActivity(b)), [b])) ? t : null;
    return (0, l.jsxs)("div", {
        className: E.kL,
        children: [
            (0, l.jsx)(h.b, {
                currentUser: O,
                activity: C,
                currentGameName: null != (n = null == y ? void 0 : y.name) ? n : null,
                activeTab: N,
                onTabChange: _,
            }),
            (0, l.jsx)("div", {
                className: E.Qs,
                children:
                    N === u.x.FRIENDS
                        ? (0, l.jsx)(d.F, {
                              onPrimaryAction: I,
                              onContextMenu: A,
                          })
                        : N === u.x.MESSAGES
                          ? (0, l.jsx)(g.t, {
                                onPrimaryAction: I,
                                onContextMenu: A,
                            })
                          : N === u.x.VOICE
                            ? (0, l.jsx)(f.T, {
                                  onPrimaryAction: I,
                                  onContextMenu: A,
                              })
                            : null,
            }),
        ],
    });
}
let y = r.memo(function (e) {
    let { locked: t } = e,
        { handlePrimaryAction: n, handleContextMenu: r } = (0, I.W)();
    return t
        ? null
        : (0, l.jsx)(A, {
              onPrimaryAction: n,
              onContextMenu: r,
          });
});
