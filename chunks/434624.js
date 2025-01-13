n.d(t, {
    l: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(866442),
    s = n(596454),
    c = n(434650),
    d = n(446489),
    u = n(56314),
    m = n(566006),
    h = n(287151),
    f = n(636804),
    p = n(952714);
let _ = r.memo(function (e) {
        let t,
            n,
            { useChatFontScaling: r, hideEmoji: l, emoji: c, className: _, count: g, me: E, me_burst: C, burst_count: I, burst_colors: x, readOnly: N, isLurking: v, isGuest: T, isPendingMember: S, type: A, emojiSize: b } = e,
            j = A === m.O.BURST,
            R = (0, h.y4)(E, C, A),
            Z = (0, u.v)(j && null != x ? x : []),
            P = r ? p : f,
            L = j ? I : g,
            y = (0, d.y)(L, h.aO),
            O = {};
        if (j && null != Z) {
            var M;
            let { accentColor: e, backgroundColor: i, opacity: r } = Z,
                l = null !== (M = (0, o.wK)(null != i ? i : '', r)) && void 0 !== M ? M : '';
            R && (O.borderColor = i), (O.background = l), (t = e), (n = e);
        }
        let k = {
            minWidth: y,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)('div', {
            className: a()(P.reaction, P.reactionInner, _, {
                [P.reactionMe]: R,
                [P.reactionReadOnly]: N && !v && !S && !T
            }),
            style: O,
            children: [
                (0, i.jsx)(s.Z, {
                    className: a()({ [P.hideEmoji]: l }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: b,
                    animated: j && c.animated
                }),
                (0, i.jsx)('div', {
                    className: P.reactionCount,
                    style: k,
                    children: L
                })
            ]
        });
    }),
    g = r.memo(function (e) {
        let { showImmediate: t, reactions: n, emojiSize: l, ...a } = e,
            [o, s] = r.useState(!1),
            [d, u] = r.useTransition(),
            f = r.useCallback(
                (e) => {
                    e &&
                        !o &&
                        !d &&
                        u(() => {
                            s(!0);
                        });
                },
                [o, d]
            ),
            p = (0, c.O)(f),
            g = (o && !d) || t ? h.le : _;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { ref: p }),
                n.map((e) => {
                    var t, n;
                    return (0, i.jsx)(
                        g,
                        {
                            ...a,
                            ...e,
                            emojiSize: l
                        },
                        ((t = e),
                        ''
                            .concat(t.type === m.O.BURST ? 'burst:' : '')
                            .concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ':')
                            .concat(t.emoji.name))
                    );
                })
            ]
        });
    });
