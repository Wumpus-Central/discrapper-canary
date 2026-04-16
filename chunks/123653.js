"use strict";
n.d(t, { A: () => p });
var l = n(627968),
    i = n(64700),
    s = n(884362),
    a = n(837381),
    r = n(311907),
    o = n(397927),
    d = n(775602),
    c = n(200463),
    u = n(435470),
    m = n(853742),
    h = n(376310),
    x = n(652215),
    g = n(985018),
    f = n(6858);
function _() {
    return Promise.resolve();
}
function p(e) {
    let { channel: t, closePopout: n, setPopoutRef: p } = e,
        j = (0, u.OT)(t),
        { tagFilter: b } = (0, c.R)(t.id),
        v = (0, c.p)(),
        A = (0, r.bG)([d.A], () => d.A.keyboardModeEnabled),
        C = i.useCallback(
            (e) => {
                (0, m.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(b),
                    added: !b.has(e),
                    location: {
                        page: x.liQ.GUILD_CHANNEL,
                        section: x.JJy.FORUM_CHANNEL_HEADER,
                        object: x.ZSU.CHANNEL_TAG,
                    },
                }),
                    v.getState().toggleTagFilter(t.id, e);
            },
            [t, b, v],
        ),
        T = i.useCallback(() => {
            v.getState().setTagFilter(t.id, new Set()), A || n();
        }, [v, t.id, A, n]),
        N = (0, s.Ay)({
            id: `${t.id}-all-tags-dropdown-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: _,
            scrollToEnd: _,
        }),
        S = i.useRef(null);
    return (
        i.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != S.current) {
                    let e = S.current.querySelector(`.${f.Tc}`);
                    null != e && e.focus();
                }
            });
        }, []),
        (0, l.jsxs)(o.lGe, {
            ref: (e) => {
                p?.(e);
            },
            "aria-label": g.intl.string(g.t.TdqRTh),
            className: f.kL,
            children: [
                (0, l.jsx)("div", {
                    className: f.wx,
                    children: (0, l.jsxs)("div", {
                        className: f.LD,
                        children: [
                            (0, l.jsx)(o.Heading, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: f.TK,
                                children: g.intl.string(g.t.HPu3kq),
                            }),
                            (0, l.jsx)("div", {
                                className: f.d1,
                                children: (0, l.jsx)(o.Text, {
                                    className: f.lT,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    tabularNumbers: !0,
                                    children: b.size,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(a.hD, {
                    navigator: N,
                    children: (0, l.jsx)(a.PR, {
                        children: (e) => {
                            let { ref: t, ...n } = e;
                            return (0, l.jsx)("div", {
                                ref: (e) => {
                                    (t.current = e), (S.current = e);
                                },
                                ...n,
                                className: f.I8,
                                children: j.map((e) =>
                                    (0, l.jsx)(
                                        h.A,
                                        { className: f.Tc, tag: e, selected: b.has(e.id), onClick: () => C(e.id) },
                                        e.id,
                                    ),
                                ),
                            });
                        },
                    }),
                }),
                (0, l.jsx)("div", { className: f.me }),
                (0, l.jsx)(o.QWc, {
                    "aria-label": g.intl.string(g.t["98EPQP"]),
                    onClick: T,
                    text: g.intl.string(g.t["98EPQP"]),
                }),
            ],
        })
    );
}
