n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(924826),
    a = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(109434),
    u = n(456269),
    m = n(228392),
    h = n(479099),
    g = n(981631),
    x = n(388032),
    f = n(158804);
function p() {
    return Promise.resolve();
}
function v(e) {
    let { channel: t, closePopout: n, setPopoutRef: v } = e,
        C = (0, u.Vm)(t),
        { tagFilter: _ } = (0, d.H)(t.id),
        b = (0, d.v)(),
        j = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        N = l.useCallback(
            (e) => {
                (0, m.e7)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(_),
                    added: !_.has(e),
                    location: {
                        page: g.ZY5.GUILD_CHANNEL,
                        section: g.jXE.FORUM_CHANNEL_HEADER,
                        object: g.qAy.CHANNEL_TAG
                    }
                }),
                    b.getState().toggleTagFilter(t.id, e);
            },
            [t, _, b]
        ),
        T = l.useCallback(() => {
            b.getState().setTagFilter(t.id, new Set()), j || n();
        }, [b, t.id, j, n]),
        I = (0, r.ZP)({
            id: ''.concat(t.id, '-all-tags-dropdown-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: p,
            scrollToEnd: p
        }),
        S = l.useRef(null);
    return (
        l.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != S.current) {
                    let e = S.current.querySelector('.'.concat(f.tag));
                    null != e && e.focus();
                }
            });
        }, []),
        (0, i.jsxs)(o.VqE, {
            ref: v,
            'aria-label': x.intl.string(x.t.TdqRTk),
            className: f.container,
            children: [
                (0, i.jsx)('div', {
                    className: f.header,
                    children: (0, i.jsxs)('div', {
                        className: f.headerLeft,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                color: 'interactive-normal',
                                variant: 'heading-md/semibold',
                                className: f.headerText,
                                children: x.intl.string(x.t.HPu3kp)
                            }),
                            (0, i.jsx)('div', {
                                className: f.countContainer,
                                children: (0, i.jsx)(o.Text, {
                                    className: f.countText,
                                    color: 'none',
                                    variant: 'text-xs/medium',
                                    tabularNumbers: !0,
                                    children: _.size
                                })
                            })
                        ]
                    })
                }),
                (0, i.jsx)(a.bG, {
                    navigator: I,
                    children: (0, i.jsx)(a.SJ, {
                        children: (e) => {
                            let { ref: t, ...n } = e;
                            return (0, i.jsx)('div', {
                                ref: (e) => {
                                    (t.current = e), (S.current = e);
                                },
                                ...n,
                                className: f.tagContainer,
                                children: C.map((e) =>
                                    (0, i.jsx)(
                                        h.Z,
                                        {
                                            className: f.tag,
                                            tag: e,
                                            selected: _.has(e.id),
                                            onClick: () => N(e.id)
                                        },
                                        e.id
                                    )
                                )
                            });
                        }
                    })
                }),
                (0, i.jsx)('div', { className: f.separator }),
                (0, i.jsx)(o.zxk, {
                    look: o.zxk.Looks.LINK,
                    size: o.zxk.Sizes.MIN,
                    color: o.zxk.Colors.CUSTOM,
                    className: f.clear,
                    'aria-label': x.intl.string(x.t['98EPQE']),
                    onClick: T,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-link',
                        children: x.intl.string(x.t['98EPQE'])
                    })
                })
            ]
        })
    );
}
