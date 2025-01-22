var i = r(47120);
var a = r(200651);
r(192379);
var o = r(392711),
    s = r.n(o),
    l = r(481060),
    u = r(493683),
    c = r(904245),
    d = r(911969),
    f = r(933557),
    p = r(699516),
    h = r(594174),
    _ = r(895924),
    m = r(689079),
    g = r(981631),
    E = r(388032);
function v(e) {
    switch (e) {
        case g.nkL.GIF.title:
        case g.nkL.TENOR.title:
            return E.intl.string(E.t['0vrCgI']);
        default:
            return '';
    }
}
let y = [
    ...s()(g.nkL)
        .values()
        .map((e) => ({
            id: e.commandId,
            untranslatedName: e.command,
            displayName: e.command,
            type: d.yU.CHAT,
            inputType: _.iw.BUILT_IN_INTEGRATION,
            applicationId: m.bi.BUILT_IN,
            get untranslatedDescription() {
                return v(e.title);
            },
            get displayDescription() {
                return v(e.title);
            },
            options:
                e.type === g.q9n.GIF
                    ? [
                          {
                              name: 'query',
                              displayName: 'query',
                              type: d.jw.STRING,
                              get description() {
                                  return E.intl.string(E.t['+9g3Dg']);
                              },
                              get displayDescription() {
                                  return E.intl.string(E.t['+9g3Dg']);
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
        type: d.yU.CHAT,
        inputType: _.iw.BUILT_IN,
        applicationId: m.bi.BUILT_IN,
        get untranslatedDescription() {
            return E.intl.string(E.t['26C4oq']);
        },
        get displayDescription() {
            return E.intl.string(E.t['26C4oq']);
        },
        options: [
            {
                name: 'silent',
                displayName: 'silent',
                type: d.jw.BOOLEAN,
                get description() {
                    return E.intl.string(E.t.YH7PkJ);
                },
                get displayDescription() {
                    return E.intl.string(E.t.bq3JXl);
                },
                required: !1
            }
        ],
        predicate: (e) => {
            let { channel: n } = e;
            return n.isGroupDM();
        },
        execute: (e, n) => {
            var r, i;
            let { channel: o } = n,
                s = (0, f.F6)(o, h.default, p.Z),
                d = E.intl.formatToPlainString(E.t.hJ5Ap6, { name: s }),
                _ = E.intl.format(E.t.SSIVOj, { name: s }),
                m = null !== (i = null === (r = e.find((e) => 'silent' === e.name)) || void 0 === r ? void 0 : r.value) && void 0 !== i && i;
            async function g() {
                try {
                    await u.Z.closePrivateChannel(o.id, void 0, m);
                } catch (e) {
                    c.Z.sendBotMessage(o.id, E.intl.string(E.t.YOsuT0));
                }
            }
            o.isManaged() && ((d = E.intl.formatToPlainString(E.t.hVGjER, { name: s })), (_ = E.intl.format(E.t.IK1Qvr, { name: s }))),
                (0, l.openModal)((e) =>
                    (0, a.jsx)(l.ConfirmModal, {
                        header: d,
                        confirmText: E.intl.string(E.t['26C4oq']),
                        cancelText: E.intl.string(E.t['ETE/oK']),
                        onConfirm: g,
                        ...e,
                        children: (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: _
                        })
                    })
                );
        }
    },
    {
        id: '-17',
        untranslatedName: 'sticker',
        displayName: 'sticker',
        type: d.yU.CHAT,
        inputType: _.iw.BUILT_IN_INTEGRATION,
        applicationId: m.bi.BUILT_IN,
        get untranslatedDescription() {
            return E.intl.string(E.t.GUH9IC);
        },
        get displayDescription() {
            return E.intl.string(E.t.GUH9IC);
        },
        options: [
            {
                name: 'query',
                displayName: 'query',
                type: d.jw.STRING,
                get description() {
                    return E.intl.string(E.t.hIbHm5);
                },
                get displayDescription() {
                    return E.intl.string(E.t.hIbHm5);
                },
                required: !0
            }
        ],
        integrationType: g.q9n.STICKER,
        integrationTitle: 'sticker'
    }
];
n.Z = y;
