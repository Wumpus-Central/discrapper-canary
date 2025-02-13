n.d(t, {
    ZP: () => N,
    wz: () => A
});
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(555573),
    l = n(10718),
    u = n(895924),
    c = n(124072),
    d = n(665906),
    f = n(695346),
    _ = n(592125),
    p = n(703558),
    h = n(496675),
    m = n(944486),
    g = n(585483),
    E = n(981631),
    v = n(689079),
    y = n(665692),
    I = n(388032),
    T = n(36706);
function b(e, t, n, r, a) {
    if (null == e) return;
    let c = () => {
        let i = _.Z.getChannel(e);
        if (null == i) return;
        let { command: s, application: c } = l.Xq(
            {
                channel: i,
                type: 'channel'
            },
            n,
            a
        );
        if (null != s && s.untranslatedName === t) {
            var d, f;
            g.S.dispatch(E.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != c
                    ? {
                          type: u.Qi.APPLICATION,
                          id: c.id,
                          icon: c.icon,
                          name: null !== (f = null == c ? void 0 : null === (d = c.bot) || void 0 === d ? void 0 : d.username) && void 0 !== f ? f : c.name,
                          application: c
                      }
                    : null;
            o.Po({
                channelId: e,
                command: null,
                section: null
            }),
                o.Po({
                    channelId: e,
                    command: s,
                    section: t,
                    location: r
                });
        }
    };
    '' !== p.Z.getDraft(e, p.d.ChannelMessage)
        ? (0, s.h7j)((t) =>
              (0, i.jsx)(s.ConfirmModal, {
                  header: I.intl.string(I.t.pe26Cg),
                  confirmText: I.intl.string(I.t.VkKicX),
                  cancelText: I.intl.string(I.t['ETE/oK']),
                  onConfirm: () => c(),
                  confirmButtonColor: s.zxk.Colors.BRAND,
                  onCloseCallback: () => {
                      g.S.dispatch(E.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
                  ...t,
                  children: (0, i.jsx)(s.Text, {
                      variant: 'text-md/normal',
                      children: I.intl.string(I.t['+awCIy'])
                  })
              })
          )
        : c();
}
function S(e) {
    var t;
    let { node: n, output: o, state: p } = e,
        g = (0, a.e7)(
            [_.Z, m.Z],
            () => {
                var e;
                return _.Z.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : m.Z.getChannelId());
            },
            [n.channelId]
        ),
        { hasSendMessagePerm: I, hasUseAppCommandsPerm: T } = (0, a.cj)([h.Z], () => ({
            hasSendMessagePerm: h.Z.can(E.Plq.SEND_MESSAGES, g),
            hasUseAppCommandsPerm: h.Z.can(E.Plq.USE_APPLICATION_COMMANDS, g)
        })),
        S =
            void 0 !== g
                ? {
                      type: 'channel',
                      channel: g
                  }
                : { type: 'contextless' },
        { command: A } = l.YZ(S, null !== (t = n.commandKey) && void 0 !== t ? t : ''),
        N = f.dN.useSetting(),
        C = r.useMemo(() => {
            if (null == A || null == g || A.untranslatedName !== n.commandName || N) return !1;
            let e = g.isPrivate();
            if ((0, d.xl)(g) || (!e && !I)) return !1;
            let t = (null == A ? void 0 : A.applicationId) === v.bi.BUILT_IN;
            return !!e || !!t || !!T;
        }, [g, A, I, T, n.commandName, N]),
        R = r.useCallback(
            (e) => {
                null == e || e.stopPropagation(), null != g && null != n.commandName && null != n.commandKey && b(g.id, n.commandName, n.commandKey, u.Vh.MENTION);
            },
            [g, n.commandKey, n.commandName]
        );
    return C
        ? (0, i.jsx)(
              s.ua7,
              {
                  text: n.output,
                  position: 'top',
                  children: (e) => {
                      let { onMouseEnter: t, onMouseLeave: r } = e;
                      return (0, i.jsxs)(
                          c.Z,
                          {
                              role: 'link',
                              onClick: R,
                              onMouseEnter: t,
                              onMouseLeave: r,
                              children: [y.GI, o(n.content, p)]
                          },
                          p.key
                      );
                  }
              },
              p.key
          )
        : (0, i.jsxs)('span', {
              children: [y.GI, o(n.content, p)]
          });
}
function A(e) {
    let { commandId: t, commandName: n, commandDescription: r, applicationId: o, onClick: l } = e,
        c = (0, a.e7)([m.Z], () => m.Z.getChannelId()),
        d = (e) => {
            null == e || e.stopPropagation(), b(c, n, t, u.Vh.POPULAR_COMMANDS, o), null == l || l(t);
        };
    return (0, i.jsx)(s.ua7, {
        text: r,
        position: 'top',
        tooltipContentClassName: T.tooltip,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: r } = e;
            return (0, i.jsxs)(s.zxk, {
                color: s.Ttl.PRIMARY,
                size: s.PhG.ICON,
                onClick: d,
                onMouseEnter: t,
                onMouseLeave: r,
                children: ['/', n]
            });
        }
    });
}
function N(e) {
    return {
        react: (e, t, n) =>
            (0, i.jsx)(S, {
                node: e,
                output: t,
                state: n
            })
    };
}
