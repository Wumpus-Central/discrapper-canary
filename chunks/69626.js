r.d(n, {
    ZP: function () {
        return N;
    },
    wz: function () {
        return C;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(555573),
    u = r(10718),
    c = r(895924),
    d = r(124072),
    f = r(665906),
    p = r(695346),
    h = r(592125),
    _ = r(703558),
    m = r(496675),
    g = r(944486),
    E = r(585483),
    v = r(981631),
    y = r(689079),
    b = r(665692),
    I = r(388032),
    T = r(170686);
function S(e, n, r, a, o) {
    if (null == e) return;
    let d = () => {
        let i = h.Z.getChannel(e);
        if (null == i) return;
        let { command: s, application: d } = u.Xq(
            {
                channel: i,
                type: 'channel'
            },
            r,
            o
        );
        if (null != s && s.untranslatedName === n) {
            var f, p;
            E.S.dispatch(v.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let n =
                null != d
                    ? {
                          type: c.Qi.APPLICATION,
                          id: d.id,
                          icon: d.icon,
                          name: null !== (p = null == d ? void 0 : null === (f = d.bot) || void 0 === f ? void 0 : f.username) && void 0 !== p ? p : d.name,
                          application: d
                      }
                    : null;
            l.Po({
                channelId: e,
                command: null,
                section: null
            }),
                l.Po({
                    channelId: e,
                    command: s,
                    section: n,
                    location: a
                });
        }
    };
    '' !== _.Z.getDraft(e, _.d.ChannelMessage)
        ? (0, s.openModal)((n) =>
              (0, i.jsx)(s.ConfirmModal, {
                  header: I.intl.string(I.t.pe26Cg),
                  confirmText: I.intl.string(I.t.VkKicX),
                  cancelText: I.intl.string(I.t['ETE/oK']),
                  onConfirm: () => d(),
                  confirmButtonColor: s.Button.Colors.BRAND,
                  onCloseCallback: () => {
                      E.S.dispatch(v.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
                  ...n,
                  children: (0, i.jsx)(s.Text, {
                      variant: 'text-md/normal',
                      children: I.intl.string(I.t['+awCIy'])
                  })
              })
          )
        : d();
}
function A(e) {
    var n;
    let { node: r, output: l, state: _ } = e,
        E = (0, o.e7)(
            [h.Z, g.Z],
            () => {
                var e;
                return h.Z.getChannel(null !== (e = r.channelId) && void 0 !== e ? e : g.Z.getChannelId());
            },
            [r.channelId]
        ),
        { hasSendMessagePerm: I, hasUseAppCommandsPerm: T } = (0, o.cj)([m.Z], () => {
            let e = m.Z.can(v.Plq.SEND_MESSAGES, E);
            return {
                hasSendMessagePerm: e,
                hasUseAppCommandsPerm: m.Z.can(v.Plq.USE_APPLICATION_COMMANDS, E)
            };
        }),
        A =
            void 0 !== E
                ? {
                      type: 'channel',
                      channel: E
                  }
                : { type: 'contextless' },
        { command: C } = u.YZ(A, null !== (n = r.commandKey) && void 0 !== n ? n : ''),
        N = p.dN.useSetting(),
        R = a.useMemo(() => {
            if (null == C || null == E || C.untranslatedName !== r.commandName || N) return !1;
            let e = E.isPrivate();
            if ((0, f.xl)(E) || (!e && !I)) return !1;
            let n = (null == C ? void 0 : C.applicationId) === y.bi.BUILT_IN;
            return !!e || !!n || !!T || !1;
        }, [E, C, I, T, r.commandName, N]),
        O = a.useCallback(
            (e) => {
                null == e || e.stopPropagation(), null != E && null != r.commandName && null != r.commandKey && S(E.id, r.commandName, r.commandKey, c.Vh.MENTION);
            },
            [E, r.commandKey, r.commandName]
        );
    return R
        ? (0, i.jsx)(
              s.Tooltip,
              {
                  text: r.output,
                  position: 'top',
                  children: (e) => {
                      let { onMouseEnter: n, onMouseLeave: a } = e;
                      return (0, i.jsxs)(
                          d.Z,
                          {
                              role: 'link',
                              onClick: O,
                              onMouseEnter: n,
                              onMouseLeave: a,
                              children: [b.GI, l(r.content, _)]
                          },
                          _.key
                      );
                  }
              },
              _.key
          )
        : (0, i.jsxs)('span', {
              children: [b.GI, l(r.content, _)]
          });
}
function C(e) {
    let { commandId: n, commandName: r, commandDescription: a, applicationId: l, onClick: u } = e,
        d = (0, o.e7)([g.Z], () => g.Z.getChannelId()),
        f = (e) => {
            null == e || e.stopPropagation(), S(d, r, n, c.Vh.POPULAR_COMMANDS, l), null == u || u(n);
        };
    return (0, i.jsx)(s.Tooltip, {
        text: a,
        position: 'top',
        tooltipContentClassName: T.tooltip,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: a } = e;
            return (0, i.jsxs)(s.Button, {
                color: s.ButtonColors.PRIMARY,
                size: s.ButtonSizes.ICON,
                onClick: f,
                onMouseEnter: n,
                onMouseLeave: a,
                children: ['/', r]
            });
        }
    });
}
function N(e) {
    return {
        react: (e, n, r) =>
            (0, i.jsx)(A, {
                node: e,
                output: n,
                state: r
            })
    };
}
