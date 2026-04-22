"use strict";
n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var a = n(371444),
    s = n(392421),
    i = n(602137),
    r = n(861672),
    o = n(477782),
    d = n(212007),
    c = n(200463),
    u = n(853742),
    m = n(985018),
    h = n(297897),
    g = n(50001);
function x(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: x, layoutType: f, tagSetting: _ } = (0, c.R)(t.id),
        { showResolvedFlags: p, setShowResolvedFlags: j } = (0, d.T)(t.id),
        b = (0, c.p)(),
        v = t.isMediaChannel(),
        C = (e) => {
            (0, u.Cd)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }), b.getState().setSortOrder(t.id, e), n();
        },
        A = (e) => {
            (0, u.ad)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
                b.getState().setLayoutType(t.id, e),
                n();
        },
        N = (e) => {
            b.getState().setTagSetting(t.id, e), n();
        },
        S = null != t.availableTags && t.availableTags.length > 0;
    return (0, l.jsx)("div", {
        className: g.k,
        children: (0, l.jsxs)(r.W, {
            "data-menu-migrated": !0,
            navId: "sort-and-view",
            "aria-label": v ? m.intl.string(m.t["kQN/bi"]) : m.intl.string(m.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, l.jsxs)(o.rX, {
                    label: m.intl.string(m.t.f8wNDl),
                    children: [
                        (0, l.jsx)(o.iD, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: m.intl.string(m.t.jOPmcI),
                            action: () => C(i.T.LATEST_ACTIVITY),
                            checked: x === i.T.LATEST_ACTIVITY,
                        }),
                        (0, l.jsx)(o.iD, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: m.intl.string(m.t.UIltXd),
                            action: () => C(i.T.CREATION_DATE),
                            checked: x === i.T.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, l.jsx)(o.rX, {
                        label: m.intl.string(h.default.PsM2b4),
                        children: (0, l.jsx)(o.sL, {
                            id: "resolved-flags-none",
                            label: m.intl.string(m.t.XJuakA),
                            action: () => j(!p),
                            checked: p,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel()
                    ? null
                    : (0, l.jsxs)(o.rX, {
                          label: m.intl.string(m.t.mFMDSq),
                          children: [
                              (0, l.jsx)(o.iD, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: m.intl.string(m.t["NJFr+g"]),
                                  action: () => A(a.C.LIST),
                                  checked: f === a.C.LIST,
                              }),
                              (0, l.jsx)(o.iD, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: m.intl.string(m.t.wKeggb),
                                  action: () => A(a.C.GRID),
                                  checked: f === a.C.GRID,
                              }),
                          ],
                      }),
                S
                    ? (0, l.jsxs)(o.rX, {
                          label: m.intl.string(m.t.Paxaug),
                          children: [
                              (0, l.jsx)(o.iD, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: m.intl.string(m.t.rQ0ctQ),
                                  action: () => N(s.n.MATCH_SOME),
                                  checked: _ === s.n.MATCH_SOME,
                              }),
                              (0, l.jsx)(o.iD, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: m.intl.string(m.t.FCXUu0),
                                  action: () => N(s.n.MATCH_ALL),
                                  checked: _ === s.n.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, l.jsx)(o.rX, {
                    children: (0, l.jsx)(o.Dr, {
                        id: "reset-all",
                        label: m.intl.string(m.t["3b//lO"]),
                        action: () => {
                            C(t.getDefaultSortOrder()), A(t.getDefaultLayout()), N(t.getDefaultTagSetting());
                        },
                    }),
                }),
            ],
        }),
    });
}
