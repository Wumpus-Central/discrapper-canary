n.d(t, { Z: () => O }), n(47120);
var r = n(200651);
n(192379);
var i = n(392711),
    o = n.n(i),
    a = n(481060),
    s = n(493683),
    l = n(904245),
    c = n(911969),
    u = n(933557),
    d = n(699516),
    f = n(594174),
    _ = n(895924),
    p = n(689079),
    h = n(981631),
    m = n(388032);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    switch (e) {
        case h.nkL.GIF.title:
        case h.nkL.TENOR.title:
            return m.NW.string(m.t['0vrCgI']);
        default:
            return '';
    }
}
let O = [
    ...o()(h.nkL)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: c.yU.CHAT,
            inputType: _.iw.BUILT_IN_INTEGRATION,
            applicationId: p.bi.BUILT_IN,
            get untranslatedDescription() {
                return v(e.title);
            },
            get displayDescription() {
                return v(e.title);
            },
            options:
                e.type === h.q9n.GIF
                    ? [
                          {
                              name: 'query',
                              displayName: 'query',
                              type: c.jw.STRING,
                              get description() {
                                  return m.NW.string(m.t['+9g3Dg']);
                              },
                              get displayDescription() {
                                  return m.NW.string(m.t['+9g3Dg']);
                              },
                              required: !0
                          }
                      ]
                    : [],
            integrationType: e.type,
            integrationTitle: e.title
        }))
        .value(),
    {
        id: '-15',
        untranslatedName: 'leave',
        displayName: 'leave',
        type: c.yU.CHAT,
        inputType: _.iw.BUILT_IN,
        applicationId: p.bi.BUILT_IN,
        get untranslatedDescription() {
            return m.NW.string(m.t['26C4oq']);
        },
        get displayDescription() {
            return m.NW.string(m.t['26C4oq']);
        },
        options: [
            {
                name: 'silent',
                displayName: 'silent',
                type: c.jw.BOOLEAN,
                get description() {
                    return m.NW.string(m.t.YH7PkJ);
                },
                get displayDescription() {
                    return m.NW.string(m.t.bq3JXl);
                },
                required: !1
            }
        ],
        predicate: (e) => {
            let { channel: t } = e;
            return null != t && t.isGroupDM();
        },
        execute: (e, t) => {
            var n, i;
            let { channel: o } = t;
            if (null == o) return;
            let c = (0, u.F6)(o, f.default, d.Z),
                _ = m.NW.formatToPlainString(m.t.hJ5Ap6, { name: c }),
                p = m.NW.format(m.t.SSIVOj, { name: c }),
                h = null != (i = null == (n = e.find((e) => 'silent' === e.name)) ? void 0 : n.value) && i;
            async function g() {
                if (null != o)
                    try {
                        await s.Z.closePrivateChannel(o.id, void 0, h);
                    } catch (e) {
                        l.Z.sendBotMessage(o.id, m.NW.string(m.t.YOsuT0));
                    }
            }
            o.isManaged() && ((_ = m.NW.formatToPlainString(m.t.hVGjER, { name: c })), (p = m.NW.format(m.t.IK1Qvr, { name: c }))),
                (0, a.h7j)((e) =>
                    (0, r.jsx)(
                        a.ConfirmModal,
                        y(
                            E(
                                {
                                    header: _,
                                    confirmText: m.NW.string(m.t['26C4oq']),
                                    cancelText: m.NW.string(m.t['ETE/oK']),
                                    onConfirm: g
                                },
                                e
                            ),
                            {
                                children: (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    children: p
                                })
                            }
                        )
                    )
                );
        }
    },
    {
        id: '-17',
        untranslatedName: 'sticker',
        displayName: 'sticker',
        type: c.yU.CHAT,
        inputType: _.iw.BUILT_IN_INTEGRATION,
        applicationId: p.bi.BUILT_IN,
        get untranslatedDescription() {
            return m.NW.string(m.t.GUH9IC);
        },
        get displayDescription() {
            return m.NW.string(m.t.GUH9IC);
        },
        options: [
            {
                name: 'query',
                displayName: 'query',
                type: c.jw.STRING,
                get description() {
                    return m.NW.string(m.t.hIbHm5);
                },
                get displayDescription() {
                    return m.NW.string(m.t.hIbHm5);
                },
                required: !0
            }
        ],
        integrationType: h.q9n.STICKER,
        integrationTitle: 'sticker'
    }
];
