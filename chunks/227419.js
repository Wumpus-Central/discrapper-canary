n.d(t, { Z: () => E }), n(47120);
var i = n(200651);
n(192379);
var r = n(392711),
    a = n.n(r),
    s = n(481060),
    o = n(493683),
    l = n(904245),
    u = n(911969),
    c = n(933557),
    d = n(699516),
    f = n(594174),
    _ = n(895924),
    p = n(689079),
    h = n(981631),
    m = n(388032);
function g(e) {
    switch (e) {
        case h.nkL.GIF.title:
        case h.nkL.TENOR.title:
            return m.intl.string(m.t['0vrCgI']);
        default:
            return '';
    }
}
let E = [
    ...a()(h.nkL)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: u.yU.CHAT,
            inputType: _.iw.BUILT_IN_INTEGRATION,
            applicationId: p.bi.BUILT_IN,
            get untranslatedDescription() {
                return g(e.title);
            },
            get displayDescription() {
                return g(e.title);
            },
            options:
                e.type === h.q9n.GIF
                    ? [
                          {
                              name: 'query',
                              displayName: 'query',
                              type: u.jw.STRING,
                              get description() {
                                  return m.intl.string(m.t['+9g3Dg']);
                              },
                              get displayDescription() {
                                  return m.intl.string(m.t['+9g3Dg']);
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
        type: u.yU.CHAT,
        inputType: _.iw.BUILT_IN,
        applicationId: p.bi.BUILT_IN,
        get untranslatedDescription() {
            return m.intl.string(m.t['26C4oq']);
        },
        get displayDescription() {
            return m.intl.string(m.t['26C4oq']);
        },
        options: [
            {
                name: 'silent',
                displayName: 'silent',
                type: u.jw.BOOLEAN,
                get description() {
                    return m.intl.string(m.t.YH7PkJ);
                },
                get displayDescription() {
                    return m.intl.string(m.t.bq3JXl);
                },
                required: !1
            }
        ],
        predicate: (e) => {
            let { channel: t } = e;
            return null != t && t.isGroupDM();
        },
        execute: (e, t) => {
            var n, r;
            let { channel: a } = t;
            if (null == a) return;
            let u = (0, c.F6)(a, f.default, d.Z),
                _ = m.intl.formatToPlainString(m.t.hJ5Ap6, { name: u }),
                p = m.intl.format(m.t.SSIVOj, { name: u }),
                h = null !== (r = null === (n = e.find((e) => 'silent' === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== r && r;
            async function g() {
                if (null != a)
                    try {
                        await o.Z.closePrivateChannel(a.id, void 0, h);
                    } catch (e) {
                        l.Z.sendBotMessage(a.id, m.intl.string(m.t.YOsuT0));
                    }
            }
            a.isManaged() && ((_ = m.intl.formatToPlainString(m.t.hVGjER, { name: u })), (p = m.intl.format(m.t.IK1Qvr, { name: u }))),
                (0, s.h7j)((e) =>
                    (0, i.jsx)(s.ConfirmModal, {
                        header: _,
                        confirmText: m.intl.string(m.t['26C4oq']),
                        cancelText: m.intl.string(m.t['ETE/oK']),
                        onConfirm: g,
                        ...e,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            children: p
                        })
                    })
                );
        }
    },
    {
        id: '-17',
        untranslatedName: 'sticker',
        displayName: 'sticker',
        type: u.yU.CHAT,
        inputType: _.iw.BUILT_IN_INTEGRATION,
        applicationId: p.bi.BUILT_IN,
        get untranslatedDescription() {
            return m.intl.string(m.t.GUH9IC);
        },
        get displayDescription() {
            return m.intl.string(m.t.GUH9IC);
        },
        options: [
            {
                name: 'query',
                displayName: 'query',
                type: u.jw.STRING,
                get description() {
                    return m.intl.string(m.t.hIbHm5);
                },
                get displayDescription() {
                    return m.intl.string(m.t.hIbHm5);
                },
                required: !0
            }
        ],
        integrationType: h.q9n.STICKER,
        integrationTitle: 'sticker'
    }
];
