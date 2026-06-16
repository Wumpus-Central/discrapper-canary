i.d(t, { A: () => T, K: () => j });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(364522),
    c = i(761508),
    u = i(707554),
    o = i(140735),
    d = i(207803),
    g = i(183555),
    m = i(61881),
    f = i(790417),
    x = i(113763),
    p = i(583246),
    I = i(598161),
    A = i(483189),
    E = i(518477),
    h = i(464229);
function j(e) {
    let { children: t, className: i, scrollerRef: l, ...s } = e;
    return (0, n.jsx)(r.Ip, { ref: l, className: a()(h.gN, i), fade: !0, ...s, children: t });
}
function N(e) {
    let { user: t, currentUser: i, section: l, displayProfile: s, guildId: a, channelId: r, onClose: c } = e;
    return l === E.RP.ACTIVITY
        ? (0, n.jsx)(f.A, { user: t, currentUser: i, displayProfile: s, guildId: a, channelId: r, onClose: c })
        : l === E.RP.MUTUAL_FRIENDS
          ? (0, n.jsx)(x.A, { user: t, guildId: a, channelId: r, onClose: c })
          : l === E.RP.MUTUAL_GUILDS
            ? (0, n.jsx)(p.A, { user: t, onClose: c })
            : l === E.RP.WIDGETS
              ? (0, n.jsx)(I.A, { user: t, guildId: a, channelId: r })
              : l === E.RP.WISHLIST
                ? (0, n.jsx)(A.A, { profileOwner: t })
                : null;
}
function T(e) {
    let {
            user: t,
            currentUser: i,
            displayProfile: s,
            guildId: a,
            channelId: f,
            items: x,
            initialSection: p,
            onClose: I,
        } = e,
        { trackUserProfileAction: A } = (0, g.NJ)(),
        [{ section: j, text: T }, v] = l.useState(
            x.find((e) => {
                let { section: t } = e;
                return t === p;
            }) ?? x[0],
        );
    return (0, n.jsxs)("div", {
        className: h.kL,
        children: [
            (0, n.jsx)(r.Ip, {
                orientation: "horizontal",
                className: h.gU,
                fade: !0,
                paddingFix: !1,
                children: (0, n.jsx)(c.V, {
                    type: "top",
                    look: "custom",
                    selectedItem: j,
                    onItemSelect: (e) => {
                        m.A.hasUnsavedChanges() && j === E.RP.WIDGETS
                            ? (0, d.VQ)()
                            : (A({ action: "PRESS_SECTION", section: e }),
                              v((t) => x.find((t) => t.section === e) ?? t));
                    },
                    children: x.map((e) =>
                        (0, n.jsx)(
                            c.V.Item,
                            { className: h.YU, id: e.section, "aria-label": e.text, children: e.text },
                            e.section,
                        ),
                    ),
                }),
            }),
            (0, n.jsx)(c.V.Panel, {
                id: j,
                "aria-label": T,
                className: h.NM,
                children: (0, n.jsx)(u.F, {
                    component: (0, n.jsx)(o.A, { children: (0, n.jsx)(u.H, { children: T }) }),
                    children: (0, n.jsx)(N, {
                        user: t,
                        currentUser: i,
                        displayProfile: s,
                        guildId: a,
                        channelId: f,
                        section: j,
                        onClose: I,
                    }),
                }),
            }),
        ],
    });
}
