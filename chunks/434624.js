n.d(t, { l: () => f }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(866442),
    o = n(596454),
    c = n(434650),
    d = n(446489),
    u = n(56314),
    m = n(566006),
    _ = n(287151),
    h = n(111777),
    p = n(90285);
let g = l.memo(function (e) {
        let t,
            n,
            { useChatFontScaling: l, hideEmoji: a, emoji: c, className: g, count: f, me: x, me_burst: C, burst_count: v, burst_colors: E, readOnly: I, isLurking: N, isGuest: S, isPendingMember: T, type: b, emojiSize: A } = e,
            j = b === m.O.BURST,
            y = (0, _.y4)(x, C, b),
            Z = (0, u.v)(j && null != E ? E : []),
            R = l ? p : h,
            L = j ? v : f,
            P = (0, d.y)(L, _.aO),
            k = {};
        if (j && null != Z) {
            var M;
            let { accentColor: e, backgroundColor: i, opacity: l } = Z,
                a = null !== (M = (0, s.wK)(null != i ? i : '', l)) && void 0 !== M ? M : '';
            y && (k.borderColor = i), (k.background = a), (t = e), (n = e);
        }
        let O = {
            minWidth: P,
            color: t,
            borderColor: n
        };
        return (0, i.jsxs)('div', {
            className: r()(R.reaction, R.reactionInner, g, {
                [R.reactionMe]: y,
                [R.reactionReadOnly]: I && !N && !T && !S
            }),
            style: k,
            children: [
                (0, i.jsx)(o.Z, {
                    className: r()({ [R.hideEmoji]: a }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: A,
                    animated: j && c.animated
                }),
                (0, i.jsx)('div', {
                    className: R.reactionCount,
                    style: O,
                    children: L
                })
            ]
        });
    }),
    f = l.memo(function (e) {
        let { showImmediate: t, reactions: n, emojiSize: a, ...r } = e,
            [s, o] = l.useState(!1),
            [d, u] = l.useTransition(),
            h = l.useCallback(
                (e) => {
                    !e ||
                        s ||
                        d ||
                        u(() => {
                            o(!0);
                        });
                },
                [s, d]
            ),
            p = (0, c.O)(h),
            f = (s && !d) || t ? _.le : g;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { ref: p }),
                n.map((e) => {
                    var t;
                    return (0, i.jsx)(
                        f,
                        {
                            ...r,
                            ...e,
                            emojiSize: a
                        },
                        ''
                            .concat(e.type === m.O.BURST ? 'burst:' : '')
                            .concat(null !== (t = e.emoji.id) && void 0 !== t ? t : 0, ':')
                            .concat(e.emoji.name)
                    );
                })
            ]
        });
    });
