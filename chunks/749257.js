n.d(t, { Z: () => y }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(386696),
    s = n(946273),
    c = n(271383),
    u = n(430824),
    d = n(594174),
    p = n(216572),
    m = n(262746),
    f = n(211640),
    h = n(436355),
    g = n(214110),
    _ = n(388032),
    b = n(564965);
function x(e) {
    let { actions: t } = e,
        n = [[...t]],
        l = i.useRef(null);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: l,
        position: 'bottom',
        align: 'center',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(a.v2r, {
                navId: 'report-to-mod-additional-message-actions',
                onSelect: void 0,
                onClose: t,
                'aria-label': _.intl.string(_.t.UKOtz8),
                children: n.map((e, t) => (0, r.jsx)(a.kSQ, { children: e.map((e) => e) }, t))
            });
        },
        children: (e) => {
            var t, n;
            return (0, r.jsxs)(
                a.zxk,
                ((t = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({ buttonRef: l }, e)),
                (n = n =
                    {
                        onClick: e.onClick,
                        innerClassName: b.actionButton,
                        look: a.zxk.Looks.FILLED,
                        size: a.zxk.Sizes.SMALL,
                        color: a.zxk.Colors.PRIMARY,
                        'aria-label': _.intl.string(_.t.UKOtz8),
                        children: [
                            _.intl.string(_.t.UKOtz8),
                            (0, r.jsx)(a.CJ0, {
                                size: 'sm',
                                color: a.TVs.colors.INTERACTIVE_ACTIVE
                            })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
        }
    });
}
function E(e) {
    let { channel: t, message: n, snapshot: i } = e,
        { moderatorReport: a } = i,
        _ = null == a ? void 0 : a.reported_user_id,
        E = (0, l.e7)([d.default], () => (null != _ ? d.default.getUser(_) : null)),
        y = (0, l.e7)([u.Z], () => u.Z.getGuild(t.guild_id)),
        v = (0, l.e7)([c.ZP], () => (null != E ? c.ZP.getMember(t.guild_id, null == E ? void 0 : E.id) : null)),
        O = (function (e, t, n) {
            let r = new Set();
            return null != e && null != t && (0, s.CX)(e, t) && r.add('delete'), null != e && (0, s.mm)(e, t) && r.add('ban'), null != e && null != t && (0, s.BK)(e, t) && r.add('kick'), null != e && null != n && null != t && (0, o.F)(t.id, e.id) && r.add('timeout'), r;
        })(E, y, v);
    (0, p.Cv)(n, O.size > 0);
    let j = O.size <= 3 ? O.size : 2,
        C = new Set(Array.from(O).slice(0, j)),
        S = new Set(Array.from(O).slice(j)),
        I = (0, m.Z)({
            channel: t,
            user: E,
            member: v,
            inline: C.has('ban')
        }),
        N = (0, h.Z)({
            channel: t,
            user: E,
            member: v,
            inline: C.has('kick')
        }),
        T = {
            ban: I,
            delete: (0, f.Z)({
                message: n,
                inline: C.has('delete')
            }),
            timeout: (0, g.Z)({
                channel: t,
                user: E,
                inline: C.has('timeout')
            }),
            kick: N
        };
    return t.isModeratorReportChannel() && 0 !== O.size
        ? (0, r.jsxs)('div', {
              className: b.container,
              children: [Array.from(C).map((e) => T[e]), S.size > 0 ? (0, r.jsx)(x, { actions: Array.from(S).map((e) => T[e]) }) : null]
          })
        : null;
}
function y(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, r.jsx)(
                E,
                {
                    channel: n,
                    message: t,
                    snapshot: e
                },
                i
            )
        )
    });
}
