r.d(n, {
    ZP: function () {
        return C;
    },
    wz: function () {
        return N;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(555573),
    u = r(10718),
    c = r(895924),
    d = r(124072),
    f = r(665906),
    _ = r(695346),
    h = r(592125),
    p = r(703558),
    m = r(496675),
    g = r(944486),
    E = r(585483),
    v = r(981631),
    I = r(689079),
    T = r(665692),
    b = r(388032),
    y = r(170686);
function S(e, n, r, a, s) {
    if (null == e) return;
    let d = () => {
        let i = h.Z.getChannel(e);
        if (null == i) return;
        let { command: o, application: d } = u.Xq(i, r, s);
        if (null != o && o.untranslatedName === n) {
            var f, _;
            E.S.dispatch(v.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let n =
                null != d
                    ? {
                          type: c.Qi.APPLICATION,
                          id: d.id,
                          icon: d.icon,
                          name: null !== (_ = null == d ? void 0 : null === (f = d.bot) || void 0 === f ? void 0 : f.username) && void 0 !== _ ? _ : d.name,
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
                    command: o,
                    section: n,
                    location: a
                });
        }
    };
    '' !== p.Z.getDraft(e, p.d.ChannelMessage)
        ? (0, o.openModal)((n) =>
              (0, i.jsx)(o.ConfirmModal, {
                  header: b.intl.string(b.t.pe26Cg),
                  confirmText: b.intl.string(b.t.VkKicX),
                  cancelText: b.intl.string(b.t['ETE/oK']),
                  onConfirm: () => d(),
                  confirmButtonColor: o.Button.Colors.BRAND,
                  onCloseCallback: () => {
                      E.S.dispatch(v.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
                  ...n,
                  children: (0, i.jsx)(o.Text, {
                      variant: 'text-md/normal',
                      children: b.intl.string(b.t['+awCIy'])
                  })
              })
          )
        : d();
}
function A(e) {
    var n;
    let { node: r, output: l, state: p } = e,
        E = (0, s.e7)(
            [h.Z, g.Z],
            () => {
                var e;
                return h.Z.getChannel(null !== (e = r.channelId) && void 0 !== e ? e : g.Z.getChannelId());
            },
            [r.channelId]
        ),
        { hasSendMessagePerm: b, hasUseAppCommandsPerm: y } = (0, s.cj)([m.Z], () => {
            let e = m.Z.can(v.Plq.SEND_MESSAGES, E);
            return {
                hasSendMessagePerm: e,
                hasUseAppCommandsPerm: m.Z.can(v.Plq.USE_APPLICATION_COMMANDS, E)
            };
        }),
        { command: A } = u.YZ(E, null !== (n = r.commandKey) && void 0 !== n ? n : ''),
        N = _.dN.useSetting(),
        C = a.useMemo(() => {
            if (null == A || null == E || A.untranslatedName !== r.commandName || N) return !1;
            let e = E.isPrivate();
            if ((0, f.xl)(E) || (!e && !b)) return !1;
            let n = (null == A ? void 0 : A.applicationId) === I.bi.BUILT_IN;
            return !!e || !!n || !!y || !1;
        }, [E, A, b, y, r.commandName, N]),
        R = a.useCallback(
            (e) => {
                null == e || e.stopPropagation(), null != E && null != r.commandName && null != r.commandKey && S(E.id, r.commandName, r.commandKey, c.Vh.MENTION);
            },
            [E, r.commandKey, r.commandName]
        );
    return C
        ? (0, i.jsx)(
              o.Tooltip,
              {
                  text: r.output,
                  position: 'top',
                  children: (e) => {
                      let { onMouseEnter: n, onMouseLeave: a } = e;
                      return (0, i.jsxs)(
                          d.Z,
                          {
                              role: 'link',
                              onClick: R,
                              onMouseEnter: n,
                              onMouseLeave: a,
                              children: [T.GI, l(r.content, p)]
                          },
                          p.key
                      );
                  }
              },
              p.key
          )
        : (0, i.jsxs)('span', {
              children: [T.GI, l(r.content, p)]
          });
}
function N(e) {
    let { commandId: n, commandName: r, commandDescription: a, applicationId: l, onClick: u } = e,
        d = (0, s.e7)([g.Z], () => g.Z.getChannelId()),
        f = (e) => {
            null == e || e.stopPropagation(), S(d, r, n, c.Vh.POPULAR_COMMANDS, l), null == u || u(n);
        };
    return (0, i.jsx)(o.Tooltip, {
        text: a,
        position: 'top',
        tooltipContentClassName: y.tooltip,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: a } = e;
            return (0, i.jsxs)(o.Button, {
                color: o.ButtonColors.PRIMARY,
                size: o.ButtonSizes.ICON,
                onClick: f,
                onMouseEnter: n,
                onMouseLeave: a,
                children: ['/', r]
            });
        }
    });
}
function C(e) {
    return {
        react: (e, n, r) =>
            (0, i.jsx)(A, {
                node: e,
                output: n,
                state: r
            })
    };
}
