n.d(t, {
    Wf: () => C,
    ZP: () => P,
    wz: () => R
});
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(555573),
    l = n(10718),
    c = n(895924),
    u = n(124072),
    d = n(665906),
    f = n(695346),
    _ = n(592125),
    p = n(703558),
    h = n(496675),
    m = n(944486),
    g = n(585483),
    E = n(981631),
    b = n(689079),
    y = n(761652),
    O = n(388032),
    v = n(885406);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t, n, i, a) {
    if (null == e) return;
    let u = () => {
        let r = _.Z.getChannel(e);
        if (null == r) return;
        let { command: o, application: u } = l.Xq(
            {
                channel: r,
                type: 'channel'
            },
            n,
            a
        );
        if (null != o && o.untranslatedName === t) {
            var d, f;
            g.S.dispatch(E.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != u
                    ? {
                          type: c.Qi.APPLICATION,
                          id: u.id,
                          icon: u.icon,
                          name: null != (f = null == u || null == (d = u.bot) ? void 0 : d.username) ? f : u.name,
                          application: u
                      }
                    : null;
            (s.Po({
                channelId: e,
                command: null,
                section: null
            }),
                s.Po({
                    channelId: e,
                    command: o,
                    section: t,
                    location: i
                }));
        }
    };
    '' !== p.Z.getDraft(e, p.d.ChannelMessage)
        ? (0, o.h7j)((t) =>
              (0, r.jsx)(
                  o.ConfirmModal,
                  A(
                      T(
                          {
                              header: O.intl.string(O.t.pe26Cg),
                              confirmText: O.intl.string(O.t.VkKicX),
                              cancelText: O.intl.string(O.t['ETE/oK']),
                              onConfirm: () => u(),
                              confirmButtonColor: o.zxk.Colors.BRAND,
                              onCloseCallback: () => {
                                  g.S.dispatch(E.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                              }
                          },
                          t
                      ),
                      {
                          children: (0, r.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              children: O.intl.string(O.t['+awCIy'])
                          })
                      }
                  )
              )
          )
        : u();
}
function C(e) {
    var t;
    let { node: n, stateKey: o, children: s } = e,
        p = (0, a.e7)(
            [_.Z, m.Z],
            () => {
                var e;
                return _.Z.getChannel(null != (e = n.channelId) ? e : m.Z.getChannelId());
            },
            [n.channelId]
        ),
        { hasSendMessagePerm: g, hasUseAppCommandsPerm: O } = (0, a.cj)([h.Z], () => ({
            hasSendMessagePerm: h.Z.can(E.Plq.SEND_MESSAGES, p),
            hasUseAppCommandsPerm: h.Z.can(E.Plq.USE_APPLICATION_COMMANDS, p)
        })),
        v =
            void 0 !== p
                ? {
                      type: 'channel',
                      channel: p
                  }
                : { type: 'contextless' },
        { command: I } = l.YZ(v, null != (t = n.commandKey) ? t : ''),
        T = f.dN.useSetting(),
        S = i.useMemo(() => {
            if (null == I || null == p || I.untranslatedName !== n.commandName || T) return !1;
            let e = p.isPrivate();
            if ((0, d.xl)(p) || (!e && !g)) return !1;
            let t = (null == I ? void 0 : I.applicationId) === b.bi.BUILT_IN;
            return !!e || !!t || !!O;
        }, [p, I, g, O, n.commandName, T]),
        A = i.useCallback(
            (e) => {
                (null == e || e.stopPropagation(), null != p && null != n.commandName && null != n.commandKey && N(p.id, n.commandName, n.commandKey, c.Vh.MENTION));
            },
            [p, n.commandKey, n.commandName]
        );
    return S
        ? (0, r.jsxs)(
              u.Z,
              {
                  role: 'link',
                  onClick: A,
                  children: [y.GI, s]
              },
              o
          )
        : (0, r.jsxs)('span', {
              children: [y.GI, s]
          });
}
function R(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: s, onClick: l } = e,
        u = (0, a.e7)([m.Z], () => m.Z.getChannelId()),
        d = (e) => {
            (null == e || e.stopPropagation(), N(u, n, t, c.Vh.POPULAR_COMMANDS, s), null == l || l(t));
        };
    return (0, r.jsx)(o.ua7, {
        text: i,
        position: 'top',
        tooltipContentClassName: v.tooltip,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: i } = e;
            return (0, r.jsxs)(o.zxk, {
                color: o.Ttl.PRIMARY,
                size: o.PhG.ICON,
                onClick: d,
                onMouseEnter: t,
                onMouseLeave: i,
                children: [y.GI, n]
            });
        }
    });
}
function P(e) {
    return {
        react: (e, t, n) =>
            (0, r.jsx)(C, {
                node: e,
                stateKey: n.key,
                children: t(e.content, n)
            })
    };
}
