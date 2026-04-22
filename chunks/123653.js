"use strict";
n.d(t, { A: () => v });
var l = n(627968),
    a = n(64700),
    s = n(884362),
    i = n(837381),
    r = n(311907),
    o = n(305866),
    d = n(534514),
    c = n(834730),
    u = n(123292),
    m = n(775602),
    h = n(200463),
    g = n(435470),
    x = n(853742),
    f = n(376310),
    _ = n(652215),
    p = n(985018),
    j = n(156810);
function b() {
    return Promise.resolve();
}
function v(e) {
    let { channel: t, closePopout: n, setPopoutRef: v } = e,
        C = (0, g.OT)(t),
        { tagFilter: A } = (0, h.R)(t.id),
        N = (0, h.p)(),
        S = (0, r.bG)([m.A], () => m.A.keyboardModeEnabled),
        E = a.useCallback(
            (e) => {
                (0, x.UA)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    tagId: e,
                    filterTagIds: Array.from(A),
                    added: !A.has(e),
                    location: {
                        page: _.liQ.GUILD_CHANNEL,
                        section: _.JJy.FORUM_CHANNEL_HEADER,
                        object: _.ZSU.CHANNEL_TAG,
                    },
                }),
                    N.getState().toggleTagFilter(t.id, e);
            },
            [t, A, N],
        ),
        T = a.useCallback(() => {
            N.getState().setTagFilter(t.id, new Set()), S || n();
        }, [N, t.id, S, n]),
        y = (0, s.Ay)({
            id: `${t.id}-all-tags-dropdown-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: b,
            scrollToEnd: b,
        }),
        I = a.useRef(null);
    return (
        a.useEffect(() => {
            requestAnimationFrame(() => {
                if (null != I.current) {
                    let e = I.current.querySelector(`.${j.Tc}`);
                    null != e && e.focus();
                }
            });
        }, []),
        (0, l.jsxs)(o.l, {
            ref: (e) => {
                v?.(e);
            },
            "aria-label": p.intl.string(p.t.TdqRTh),
            className: j.kL,
            children: [
                (0, l.jsx)("div", {
                    className: j.wx,
                    children: (0, l.jsxs)("div", {
                        className: j.LD,
                        children: [
                            (0, l.jsx)(d.D, {
                                color: "interactive-text-default",
                                variant: "heading-md/semibold",
                                className: j.TK,
                                children: p.intl.string(p.t.HPu3kq),
                            }),
                            (0, l.jsx)("div", {
                                className: j.d1,
                                children: (0, l.jsx)(c.E, {
                                    className: j.lT,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    tabularNumbers: !0,
                                    children: A.size,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(i.hD, {
                    navigator: y,
                    children: (0, l.jsx)(i.PR, {
                        children: (e) => {
                            let { ref: t, ...n } = e;
                            return (0, l.jsx)("div", {
                                ref: (e) => {
                                    (t.current = e), (I.current = e);
                                },
                                ...n,
                                className: j.I8,
                                children: C.map((e) =>
                                    (0, l.jsx)(
                                        f.A,
                                        { className: j.Tc, tag: e, selected: A.has(e.id), onClick: () => E(e.id) },
                                        e.id,
                                    ),
                                ),
                            });
                        },
                    }),
                }),
                (0, l.jsx)("div", { className: j.me }),
                (0, l.jsx)(u.Q, {
                    "aria-label": p.intl.string(p.t["98EPQP"]),
                    onClick: T,
                    text: p.intl.string(p.t["98EPQP"]),
                }),
            ],
        })
    );
}
