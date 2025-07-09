n.d(t, {
    Wf: () => R,
    ZP: () => w,
    wz: () => P
});
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(555573),
    c = n(10718),
    u = n(895924),
    d = n(124072),
    f = n(665906),
    _ = n(695346),
    p = n(592125),
    h = n(703558),
    m = n(496675),
    g = n(944486),
    E = n(585483),
    b = n(981631),
    y = n(689079),
    O = n(761652),
    v = n(388032),
    I = n(885406);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t, n, i, a) {
    if (null == e) return;
    let d = () => {
        let r = p.Z.getChannel(e);
        if (null == r) return;
        let { command: o, application: s } = c.Xq(
            {
                channel: r,
                type: 'channel'
            },
            n,
            a
        );
        if (null != o && o.untranslatedName === t) {
            var d, f;
            E.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != s
                    ? {
                          type: u.Qi.APPLICATION,
                          id: s.id,
                          icon: s.icon,
                          name: null != (f = null == s || null == (d = s.bot) ? void 0 : d.username) ? f : s.name,
                          application: s
                      }
                    : null;
            (l.Po({
                channelId: e,
                command: null,
                section: null
            }),
                l.Po({
                    channelId: e,
                    command: o,
                    section: t,
                    location: i
                }));
        }
    };
    '' !== h.Z.getDraft(e, h.d.ChannelMessage)
        ? (0, s.h7j)((t) =>
              (0, r.jsx)(
                  s.ConfirmModal,
                  N(
                      S(
                          {
                              header: v.intl.string(v.t.pe26Cg),
                              confirmText: v.intl.string(v.t.VkKicX),
                              cancelText: v.intl.string(v.t['ETE/oK']),
                              onConfirm: () => d(),
                              confirmButtonColor: o.zx.Colors.BRAND,
                              onCloseCallback: () => {
                                  E.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                              }
                          },
                          t
                      ),
                      {
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              children: v.intl.string(v.t['+awCIy'])
                          })
                      }
                  )
              )
          )
        : d();
}
function R(e) {
    var t;
    let { node: n, stateKey: o, children: s } = e,
        l = (0, a.e7)(
            [p.Z, g.Z],
            () => {
                var e;
                return p.Z.getChannel(null != (e = n.channelId) ? e : g.Z.getChannelId());
            },
            [n.channelId]
        ),
        { hasSendMessagePerm: h, hasUseAppCommandsPerm: E } = (0, a.cj)([m.Z], () => ({
            hasSendMessagePerm: m.Z.can(b.Plq.SEND_MESSAGES, l),
            hasUseAppCommandsPerm: m.Z.can(b.Plq.USE_APPLICATION_COMMANDS, l)
        })),
        v =
            void 0 !== l
                ? {
                      type: 'channel',
                      channel: l
                  }
                : { type: 'contextless' },
        { command: I } = c.YZ(v, null != (t = n.commandKey) ? t : ''),
        T = _.dN.useSetting(),
        S = i.useMemo(() => {
            if (null == I || null == l || I.untranslatedName !== n.commandName || T) return !1;
            let e = l.isPrivate();
            if ((0, f.xl)(l) || (!e && !h)) return !1;
            let t = (null == I ? void 0 : I.applicationId) === y.bi.BUILT_IN;
            return !!e || !!t || !!E;
        }, [l, I, h, E, n.commandName, T]),
        A = i.useCallback(
            (e) => {
                (null == e || e.stopPropagation(), null != l && null != n.commandName && null != n.commandKey && C(l.id, n.commandName, n.commandKey, u.Vh.MENTION));
            },
            [l, n.commandKey, n.commandName]
        );
    return S
        ? (0, r.jsxs)(
              d.Z,
              {
                  role: 'link',
                  onClick: A,
                  children: [O.GI, s]
              },
              o
          )
        : (0, r.jsxs)('span', {
              children: [O.GI, s]
          });
}
function P(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: l, onClick: c } = e,
        d = (0, a.e7)([g.Z], () => g.Z.getChannelId()),
        f = (e) => {
            (null == e || e.stopPropagation(), C(d, n, t, u.Vh.POPULAR_COMMANDS, l), null == c || c(t));
        };
    return (0, r.jsx)(s.ua7, {
        text: i,
        position: 'top',
        tooltipContentClassName: I.tooltip,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: i } = e;
            return (0, r.jsxs)(o.zx, {
                color: o.Tt.PRIMARY,
                size: o.Ph.ICON,
                onClick: f,
                onMouseEnter: t,
                onMouseLeave: i,
                children: [O.GI, n]
            });
        }
    });
}
function w(e) {
    return {
        react: (e, t, n) =>
            (0, r.jsx)(R, {
                node: e,
                stateKey: n.key,
                children: t(e.content, n)
            })
    };
}
