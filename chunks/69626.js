n.d(t, {
    ZP: () => P,
    wz: () => R
});
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(555573),
    l = n(10718),
    c = n(895924),
    u = n(124072),
    d = n(665906),
    f = n(695346),
    p = n(592125),
    _ = n(703558),
    h = n(496675),
    m = n(944486),
    g = n(585483),
    E = n(981631),
    v = n(689079),
    b = n(665692),
    y = n(388032),
    O = n(449543);
function S(e, t, n) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t, n, i, o) {
    if (null == e) return;
    let u = () => {
        let r = p.Z.getChannel(e);
        if (null == r) return;
        let { command: a, application: u } = l.Xq(
            {
                channel: r,
                type: 'channel'
            },
            n,
            o
        );
        if (null != a && a.untranslatedName === t) {
            var d, f;
            g.S.dispatch(E.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != u
                    ? {
                          type: c.Qi.APPLICATION,
                          id: u.id,
                          icon: u.icon,
                          name: null !== (f = null == u ? void 0 : null === (d = u.bot) || void 0 === d ? void 0 : d.username) && void 0 !== f ? f : u.name,
                          application: u
                      }
                    : null;
            s.Po({
                channelId: e,
                command: null,
                section: null
            }),
                s.Po({
                    channelId: e,
                    command: a,
                    section: t,
                    location: i
                });
        }
    };
    '' !== _.Z.getDraft(e, _.d.ChannelMessage)
        ? (0, a.h7j)((t) =>
              (0, r.jsx)(
                  a.ConfirmModal,
                  N(
                      I(
                          {
                              header: y.NW.string(y.t.pe26Cg),
                              confirmText: y.NW.string(y.t.VkKicX),
                              cancelText: y.NW.string(y.t['ETE/oK']),
                              onConfirm: () => u(),
                              confirmButtonColor: a.zxk.Colors.BRAND,
                              onCloseCallback: () => {
                                  g.S.dispatch(E.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                              }
                          },
                          t
                      ),
                      {
                          children: (0, r.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              children: y.NW.string(y.t['+awCIy'])
                          })
                      }
                  )
              )
          )
        : u();
}
function C(e) {
    var t;
    let { node: n, output: s, state: _ } = e,
        g = (0, o.e7)(
            [p.Z, m.Z],
            () => {
                var e;
                return p.Z.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : m.Z.getChannelId());
            },
            [n.channelId]
        ),
        { hasSendMessagePerm: y, hasUseAppCommandsPerm: O } = (0, o.cj)([h.Z], () => ({
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
        { command: I } = l.YZ(S, null !== (t = n.commandKey) && void 0 !== t ? t : ''),
        T = f.dN.useSetting(),
        N = i.useMemo(() => {
            if (null == I || null == g || I.untranslatedName !== n.commandName || T) return !1;
            let e = g.isPrivate();
            if ((0, d.xl)(g) || (!e && !y)) return !1;
            let t = (null == I ? void 0 : I.applicationId) === v.bi.BUILT_IN;
            return !!e || !!t || !!O;
        }, [g, I, y, O, n.commandName, T]),
        C = i.useCallback(
            (e) => {
                null == e || e.stopPropagation(), null != g && null != n.commandName && null != n.commandKey && A(g.id, n.commandName, n.commandKey, c.Vh.MENTION);
            },
            [g, n.commandKey, n.commandName]
        );
    return N
        ? (0, r.jsx)(
              a.ua7,
              {
                  text: n.output,
                  position: 'top',
                  children: (e) => {
                      let { onMouseEnter: t, onMouseLeave: i } = e;
                      return (0, r.jsxs)(
                          u.Z,
                          {
                              role: 'link',
                              onClick: C,
                              onMouseEnter: t,
                              onMouseLeave: i,
                              children: [b.GI, s(n.content, _)]
                          },
                          _.key
                      );
                  }
              },
              _.key
          )
        : (0, r.jsxs)('span', {
              children: [b.GI, s(n.content, _)]
          });
}
function R(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: s, onClick: l } = e,
        u = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
        d = (e) => {
            null == e || e.stopPropagation(), A(u, n, t, c.Vh.POPULAR_COMMANDS, s), null == l || l(t);
        };
    return (0, r.jsx)(a.ua7, {
        text: i,
        position: 'top',
        tooltipContentClassName: O.tooltip,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: i } = e;
            return (0, r.jsxs)(a.zxk, {
                color: a.Ttl.PRIMARY,
                size: a.PhG.ICON,
                onClick: d,
                onMouseEnter: t,
                onMouseLeave: i,
                children: ['/', n]
            });
        }
    });
}
function P(e) {
    return {
        react: (e, t, n) =>
            (0, r.jsx)(C, {
                node: e,
                output: t,
                state: n
            })
    };
}
