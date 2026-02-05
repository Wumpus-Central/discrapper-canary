n.d(t, { A: () => I, K: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(397927),
    o = n(183555),
    d = n(958805),
    c = n(61881),
    u = n(790417),
    g = n(113763),
    m = n(583246),
    x = n(463259),
    f = n(133583),
    h = n(518477),
    p = n(96124);
function _(e) {
    let { children: t, className: n, scrollerRef: l, ...a } = e;
    return (0, i.jsx)(s.HOs, { ref: l, className: r()(p.gN, n), fade: !0, ...a, children: t });
}
function A(e) {
    let { user: t, currentUser: n, section: l, displayProfile: a, guildId: r, channelId: s, onClose: o } = e;
    return l === h.RP.ACTIVITY
        ? (0, i.jsx)(u.A, { user: t, currentUser: n, displayProfile: a, guildId: r, channelId: s, onClose: o })
        : l === h.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(g.A, { user: t, guildId: r, channelId: s, onClose: o })
          : l === h.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(m.A, { user: t, onClose: o })
            : l === h.RP.WIDGETS
              ? (0, i.jsx)(x.A, { user: t, guildId: r, channelId: s })
              : l === h.RP.WISHLIST
                ? (0, i.jsx)(f.A, { profileOwner: t })
                : null;
}
function I(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: a,
            guildId: r,
            channelId: u,
            items: g,
            initialSection: m,
            onClose: x,
        } = e,
        { trackUserProfileAction: f } = (0, o.NJ)(),
        [{ section: _, text: I }, j] = l.useState(
            g.find((e) => {
                let { section: t } = e;
                return t === m;
            }) ?? g[0],
        );
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [
            (0, i.jsx)(s.HOs, {
                orientation: "horizontal",
                className: p.gU,
                fade: !0,
                paddingFix: !1,
                children: (0, i.jsx)(s.VQ0, {
                    type: "top",
                    look: "custom",
                    selectedItem: _,
                    onItemSelect: (e) => {
                        c.A.hasUnsavedChanges() && _ === h.RP.WIDGETS
                            ? d.A.notifyUnsavedWidgets()
                            : (f({ action: "PRESS_SECTION", section: e }),
                              j((t) => g.find((t) => t.section === e) ?? t));
                    },
                    children: g.map((e) =>
                        (0, i.jsx)(
                            s.VQ0.Item,
                            { className: p.YU, id: e.section, "aria-label": e.text, children: e.text },
                            e.section,
                        ),
                    ),
                }),
            }),
            (0, i.jsx)(s.VQ0.Panel, {
                id: _,
                "aria-label": I,
                className: p.NM,
                children: (0, i.jsx)(s.Fmo, {
                    component: (0, i.jsx)(s.AC4, { children: (0, i.jsx)(s.H, { children: I }) }),
                    children: (0, i.jsx)(A, {
                        user: t,
                        currentUser: n,
                        displayProfile: a,
                        guildId: r,
                        channelId: u,
                        section: _,
                        onClose: x,
                    }),
                }),
            }),
        ],
    });
}
