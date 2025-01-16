n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var a = n(200651),
    i = n(192379),
    r = n(924826),
    l = n(91192),
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
function C(e) {
    let { channel: t, closePopout: n, setPopoutRef: C } = e,
        v = (0, u.Vm)(t),
        { tagFilter: b } = (0, d.H)(t.id),
        j = (0, d.v)(),
        _ = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        I = i.useCallback(
            (e) => {
                (0, m.e7)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(b),
                    added: !b.has(e),
                    location: {
                        page: g.ZY5.GUILD_CHANNEL,
                        section: g.jXE.FORUM_CHANNEL_HEADER,
                        object: g.qAy.CHANNEL_TAG
                    }
                }),
                    j.getState().toggleTagFilter(t.id, e);
            },
            [t, b, j]
        ),
        T = i.useCallback(() => {
            j.getState().setTagFilter(t.id, new Set()), !_ && n();
        }, [j, t.id, _, n]),
        N = (0, r.ZP)({
            id: ''.concat(t.id, '-all-tags-dropdown-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: p,
            scrollToEnd: p
        }),
        S = i.useRef(null);
    return (
        i.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != S.current) {
                    let e = S.current.querySelector('.'.concat(f.tag));
                    null != e && e.focus();
                }
            });
        }, []),
        (0, a.jsxs)(o.Dialog, {
            ref: C,
            'aria-label': x.intl.string(x.t.TdqRTk),
            className: f.container,
            children: [
                (0, a.jsx)('div', {
                    className: f.header,
                    children: (0, a.jsxs)('div', {
                        className: f.headerLeft,
                        children: [
                            (0, a.jsx)(o.Heading, {
                                color: 'interactive-normal',
                                variant: 'text-xs/bold',
                                className: f.headerText,
                                children: x.intl.string(x.t.HPu3kp)
                            }),
                            (0, a.jsx)('div', {
                                className: f.countContainer,
                                children: (0, a.jsx)(o.Text, {
                                    className: f.countText,
                                    color: 'none',
                                    variant: 'text-xs/medium',
                                    children: b.size
                                })
                            })
                        ]
                    })
                }),
                (0, a.jsx)(l.bG, {
                    navigator: N,
                    children: (0, a.jsx)(l.SJ, {
                        children: (e) => {
                            let { ref: t, ...n } = e;
                            return (0, a.jsx)('div', {
                                ref: (e) => {
                                    (t.current = e), (S.current = e);
                                },
                                ...n,
                                className: f.tagContainer,
                                children: v.map((e) =>
                                    (0, a.jsx)(
                                        h.Z,
                                        {
                                            className: f.tag,
                                            tag: e,
                                            selected: b.has(e.id),
                                            onClick: () => I(e.id)
                                        },
                                        e.id
                                    )
                                )
                            });
                        }
                    })
                }),
                (0, a.jsx)('div', { className: f.separator }),
                (0, a.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    size: o.Button.Sizes.MIN,
                    color: o.Button.Colors.CUSTOM,
                    className: f.clear,
                    'aria-label': x.intl.string(x.t['98EPQE']),
                    onClick: T,
                    children: (0, a.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-link',
                        children: x.intl.string(x.t['98EPQE'])
                    })
                })
            ]
        })
    );
}
