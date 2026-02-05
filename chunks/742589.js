n.d(t, { A: () => v, I: () => T });
var i = n(627968);
n(64700);
var s = n(607399),
    l = n(311907),
    r = n(367513),
    a = n(793574),
    d = n(688810),
    o = n(313961),
    c = n(261718),
    u = n(966597),
    h = n(922281),
    g = n(907745),
    x = n(772475),
    A = n(977997),
    m = n(723702),
    E = n(837921),
    p = n(58736),
    C = n(652215),
    j = n(746080),
    S = n(892513);
async function T(e) {
    if (!e && (0, m.isMac)() && m.isPlatformEmbedded) {
        let e = (await window.DiscordNative.remoteApp.getDefaultDoubleClickAction?.()) ?? "Maximize";
        "Minimize" === e ? E.Ay.minimize() : "Maximize" === e && E.Ay.maximize();
    }
}
function b(e) {
    let {
            children: t,
            className: n,
            channelId: a,
            channelType: d,
            guildId: m,
            innerClassname: E,
            transparent: b = !1,
            hidden: O = !1,
            toolbar: _,
            mobileToolbar: v,
            "aria-label": N,
            "aria-labelledby": I,
            scrollable: f,
            role: y,
            hideSearch: R,
            showDivider: L,
            disableDoubleClick: G,
        } = e,
        D = null == a || (0, j.jq)(a) ? null : a,
        k = (0, l.bG)([A.A], () => A.A.isInChannel(D) || !1),
        V = (0, l.bG)([o.A], () => null != D && o.A.getParticipantsListOpen(D)),
        { enabled: P, inInbox: M } = u.A.useExperiment({ location: "HeaderBar" }),
        { hasParticipantsPanel: U } = (0, c.A)({ location: "HeaderBar" });
    return (0, i.jsx)(p.Ay, {
        className: n,
        innerClassName: E,
        toolbar: (function () {
            if (null == _) return null;
            let e = null != a && !R;
            return s.Fr
                ? v
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          _,
                          e && !(0, j.jq)(a)
                              ? (0, i.jsx)(g.Ay, { guildId: m, channelId: a, className: S.$P }, m ?? a)
                              : null,
                          L && (0, i.jsx)(p.Ay.Divider, {}),
                          P && !M ? (0, i.jsx)(h.A, {}) : null,
                          U &&
                              k &&
                              null != D &&
                              !V &&
                              d === C.rbe.GROUP_DM &&
                              (0, i.jsxs)("div", {
                                  className: S.pc,
                                  children: [
                                      (0, i.jsx)(p.Ay.Divider, {}),
                                      (0, i.jsx)(x.A, { onClick: () => r.A.toggleParticipantsList(D, !V) }),
                                  ],
                              }),
                      ],
                  });
        })(),
        transparent: b,
        hidden: O,
        onDoubleClick: () => T(G),
        "aria-label": N,
        "aria-labelledby": I,
        role: y,
        scrollable: f,
        children: t,
    });
}
function O(e) {
    let { children: t, className: n, "aria-label": s, "aria-labelledby": l, role: r, disableDoubleClick: a } = e;
    return (0, i.jsx)(p.Ay, {
        className: n,
        onDoubleClick: () => T(a),
        "aria-label": s,
        "aria-labelledby": l,
        role: r,
        children: t,
    });
}
function _(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: s } = (0, d.Ay)(a.A.HEADER_BAR);
    return (0, i.jsx)(d.f5, {
        value: s,
        children: t ? (0, i.jsx)(b, { ...n, className: n.className }) : (0, i.jsx)(O, { ...n, className: n.className }),
    });
}
(_.Title = p.Ay.Title),
    (_.Icon = p.Ay.Icon),
    (_.ChannelIcon = p.Ay.ChannelIcon),
    (_.Divider = p.Ay.Divider),
    (_.Caret = p.Ay.Caret);
let v = _;
