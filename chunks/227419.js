n.d(t, { Z: () => v }), n(388685);
var r = n(54381);
n(473749);
var i = n(392711),
    a = n.n(i),
    o = n(481060),
    s = n(493683),
    l = n(904245),
    c = n(911969),
    u = n(933557),
    d = n(699516),
    f = n(594174),
    p = n(895924),
    _ = n(689079),
    m = n(981631),
    h = n(388032);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function O(e) {
    switch (e) {
        case m.nkL.GIF.title:
        case m.nkL.TENOR.title:
            return h.intl.string(h.t["0vrCgJ"]);
        default:
            return "";
    }
}
let v = [
    ...a()(m.nkL)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: c.yU.CHAT,
            inputType: p.iw.BUILT_IN_INTEGRATION,
            applicationId: _.bi.BUILT_IN,
            get untranslatedDescription() {
                return O(e.title);
            },
            get displayDescription() {
                return O(e.title);
            },
            options:
                e.type === m.q9n.GIF
                    ? [
                          {
                              name: "query",
                              displayName: "query",
                              type: c.jw.STRING,
                              get description() {
                                  return h.intl.string(h.t["+9g3Du"]);
                              },
                              get displayDescription() {
                                  return h.intl.string(h.t["+9g3Du"]);
                              },
                              required: !0,
                          },
                      ]
                    : [],
            integrationType: e.type,
            integrationTitle: e.title,
        }))
        .value(),
    {
        id: "-15",
        untranslatedName: "leave",
        displayName: "leave",
        type: c.yU.CHAT,
        inputType: p.iw.BUILT_IN,
        applicationId: _.bi.BUILT_IN,
        get untranslatedDescription() {
            return h.intl.string(h.t["26C4oi"]);
        },
        get displayDescription() {
            return h.intl.string(h.t["26C4oi"]);
        },
        options: [
            {
                name: "silent",
                displayName: "silent",
                type: c.jw.BOOLEAN,
                get description() {
                    return h.intl.string(h.t.YH7PkD);
                },
                get displayDescription() {
                    return h.intl.string(h.t.bq3JXs);
                },
                required: !1,
            },
        ],
        predicate: (e) => {
            let { channel: t } = e;
            return null != t && t.isGroupDM();
        },
        execute: (e, t) => {
            var n, i;
            let { channel: a } = t;
            if (null == a) return;
            let c = (0, u.F6)(a, f.default, d.Z),
                p = h.intl.formatToPlainString(h.t.hJ5Ap4, { name: c }),
                _ = h.intl.format(h.t.SSIVOu, { name: c }),
                m = null != (i = null == (n = e.find((e) => "silent" === e.name)) ? void 0 : n.value) && i;
            async function g() {
                if (null != a)
                    try {
                        await s.Z.closePrivateChannel(a.id, void 0, m);
                    } catch (e) {
                        l.Z.sendBotMessage(a.id, h.intl.string(h.t["YOsuT/"]));
                    }
            }
            a.isManaged() &&
                ((p = h.intl.formatToPlainString(h.t.hVGjEW, { name: c })),
                (_ = h.intl.format(h.t.IK1Qvs, { name: c }))),
                (0, o.h7j)((e) =>
                    (0, r.jsx)(
                        o.ConfirmModal,
                        y(
                            E(
                                {
                                    header: p,
                                    confirmText: h.intl.string(h.t["26C4oi"]),
                                    cancelText: h.intl.string(h.t["ETE/oC"]),
                                    onConfirm: g,
                                },
                                e,
                            ),
                            {
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: _,
                                }),
                            },
                        ),
                    ),
                );
        },
    },
    {
        id: "-17",
        untranslatedName: "sticker",
        displayName: "sticker",
        type: c.yU.CHAT,
        inputType: p.iw.BUILT_IN_INTEGRATION,
        applicationId: _.bi.BUILT_IN,
        get untranslatedDescription() {
            return h.intl.string(h.t.GUH9II);
        },
        get displayDescription() {
            return h.intl.string(h.t.GUH9II);
        },
        options: [
            {
                name: "query",
                displayName: "query",
                type: c.jw.STRING,
                get description() {
                    return h.intl.string(h.t.hIbHm1);
                },
                get displayDescription() {
                    return h.intl.string(h.t.hIbHm1);
                },
                required: !0,
            },
        ],
        integrationType: m.q9n.STICKER,
        integrationTitle: "sticker",
    },
];
