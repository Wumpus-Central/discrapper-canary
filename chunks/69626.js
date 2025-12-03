n.d(t, {
    Wf: () => T,
    ZP: () => C,
    wz: () => A,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(248514),
    s = n(28664),
    l = n(481060),
    c = n(555573),
    u = n(10718),
    d = n(895924),
    f = n(124072),
    p = n(665906),
    _ = n(695346),
    m = n(592125),
    h = n(703558),
    g = n(496675),
    E = n(944486),
    b = n(585483),
    y = n(981631),
    O = n(689079),
    v = n(761652),
    S = n(388032);
function I(e, t, n, r, i) {
    if (null == e) return;
    let a = () => {
        let a = m.Z.getChannel(e);
        if (null == a) return;
        let { command: o, application: s } = u.Xq(
            {
                channel: a,
                type: "channel",
            },
            n,
            i,
        );
        if (null != o && o.untranslatedName === t) {
            var l, f;
            b.S.dispatch(y.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != s
                    ? {
                          type: d.Qi.APPLICATION,
                          id: s.id,
                          icon: s.icon,
                          name: null != (f = null == s || null == (l = s.bot) ? void 0 : l.username) ? f : s.name,
                          application: s,
                      }
                    : null;
            c.Po({
                channelId: e,
                command: null,
                section: null,
            }),
                c.Po({
                    channelId: e,
                    command: o,
                    section: t,
                    location: r,
                });
        }
    };
    "" !== h.Z.getDraft(e, h.d.ChannelMessage)
        ? (0, o.Z)({
              title: S.intl.string(S.t.pe26Cj),
              subtitle: S.intl.string(S.t["+awCIy"]),
              confirmText: S.intl.string(S.t.VkKicb),
              onConfirm: () => a(),
              onCloseCallback: () => {
                  b.S.dispatch(y.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
              },
          })
        : a();
}
function T(e) {
    var t;
    let { node: n, stateKey: o, children: s } = e,
        l = (0, a.e7)([m.Z, E.Z], () => {
            var e;
            return m.Z.getChannel(null != (e = n.channelId) ? e : E.Z.getChannelId());
        }, [n.channelId]),
        { hasSendMessagePerm: c, hasUseAppCommandsPerm: h } = (0, a.cj)([g.Z], () => ({
            hasSendMessagePerm: g.Z.can(y.Plq.SEND_MESSAGES, l),
            hasUseAppCommandsPerm: g.Z.can(y.Plq.USE_APPLICATION_COMMANDS, l),
        })),
        b =
            void 0 !== l
                ? {
                      type: "channel",
                      channel: l,
                  }
                : { type: "contextless" },
        { command: S } = u.YZ(b, null != (t = n.commandKey) ? t : ""),
        T = _.dN.useSetting(),
        A = i.useMemo(() => {
            if (null == S || null == l || S.untranslatedName !== n.commandName || T) return !1;
            let e = l.isPrivate();
            if ((0, p.xl)(l) || (!e && !c)) return !1;
            let t = (null == S ? void 0 : S.applicationId) === O.bi.BUILT_IN;
            return !!e || !!t || !!h;
        }, [l, S, c, h, n.commandName, T]),
        C = i.useCallback(
            (e) => {
                null == e || e.stopPropagation(),
                    null != l &&
                        null != n.commandName &&
                        null != n.commandKey &&
                        I(l.id, n.commandName, n.commandKey, d.Vh.MENTION);
            },
            [l, n.commandKey, n.commandName],
        );
    return A
        ? (0, r.jsxs)(
              f.Z,
              {
                  role: "link",
                  onClick: C,
                  children: [v.GI, s],
              },
              o,
          )
        : (0, r.jsxs)("span", {
              children: [v.GI, s],
          });
}
function A(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: o, onClick: c } = e,
        u = (0, a.e7)([E.Z], () => E.Z.getChannelId()),
        f = (e) => {
            null == e || e.stopPropagation(), I(u, n, t, d.Vh.POPULAR_COMMANDS, o), null == c || c(t);
        };
    return (0, r.jsx)(s.u, {
        text: i,
        position: "top",
        children: (0, r.jsx)(l.Button, {
            size: "sm",
            variant: "secondary",
            onClick: f,
            text: "".concat(v.GI).concat(n),
        }),
    });
}
function C(e) {
    return {
        react: (e, t, n) =>
            (0, r.jsx)(T, {
                node: e,
                stateKey: n.key,
                children: t(e.content, n),
            }),
    };
}
