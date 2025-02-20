n.d(e, {
    AR: () => u,
    C2: () => c,
    Pp: () => T,
    VX: () => p,
    b7: () => I,
    sE: () => E
});
var i,
    d,
    _,
    a,
    r = n(149765),
    l = n(700785),
    s = n(981631),
    o = n(388032),
    c = (((i = {})[(i.GUILD = 0)] = 'GUILD'), (i[(i.GUILD_SCHEDULED_EVENT = 1)] = 'GUILD_SCHEDULED_EVENT'), i),
    p = (((d = {}).GUILD_TEMPLATES = 'guild-templates'), (d.CUSTOMIZE_NEW_GUILD = 'customize-new-guild'), (d.CHOOSE_GUILD = 'choose-guild'), (d.CUSTOMIZE_EXISTING_GUILD = 'customize-existing-guild'), (d.CONFIRMATION = 'confirmation'), d),
    E = (((_ = {}).CREATE = 'CREATE'), (_.HUB_SCHOOL_CLUB = 'HUB_SCHOOL_CLUB'), (_.HUB_STUDY = 'HUB_STUDY'), (_.HUB_CLASS = 'HUB_CLASS'), (_.HUB_SOCIAL = 'HUB_SOCIAL'), (_.HUB_MAJOR = 'HUB_MAJOR'), (_.HUB_DORM = 'HUB_DORM'), _),
    u = (((a = {})[(a.ALL = -1)] = 'ALL'), (a[(a.UNCATEGORIZED = 0)] = 'UNCATEGORIZED'), (a[(a.SCHOOL_CLUB = 1)] = 'SCHOOL_CLUB'), (a[(a.CLASS = 2)] = 'CLASS'), (a[(a.STUDY_SOCIAL = 3)] = 'STUDY_SOCIAL'), (a[(a.MISC = 5)] = 'MISC'), a);
function I(t) {
    return '883060064561299456' === t
        ? [
              {
                  value: 1,
                  label: o.NW.string(o.t['Z+MPNz'])
              },
              {
                  value: 2,
                  label: o.NW.string(o.t.dV9uBg)
              },
              {
                  value: 3,
                  label: o.NW.string(o.t.xoHQcn)
              },
              {
                  value: 5,
                  label: o.NW.string(o.t.Ao41rq)
              }
          ]
        : [
              {
                  value: 1,
                  label: o.NW.string(o.t.oNHFUF),
                  idealSize: 100
              },
              {
                  value: 2,
                  label: o.NW.string(o.t.V1i8nZ)
              },
              {
                  value: 3,
                  label: o.NW.string(o.t.Z2ygQk),
                  idealSize: 50
              },
              {
                  value: 5,
                  label: o.NW.string(o.t['0Bg9LS'])
              }
          ];
}
function T() {
    return {
        CREATE: {
            id: 'CREATE',
            code: '2TffvPucqHkN',
            label: o.NW.string(o.t['H3+6BA']),
            channels: [],
            system_channel_id: null
        },
        HUB_SCHOOL_CLUB: {
            id: 'HUB_SCHOOL_CLUB',
            code: 'UMUbvRpRZhS6',
            label: o.NW.string(o.t['mmFA5+']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.NW.string(o.t['VCAA/f']),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.NW.string(o.t.GHQoER),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.NW.string(o.t.nSsoSE),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: o.NW.string(o.t.yZCzMT),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.NW.string(o.t.mobYpK),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.NW.string(o.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.NW.string(o.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.NW.string(o.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.NW.string(o.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.NW.string(o.t.XS6gcH),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.NW.string(o.t.hi1Ykp),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.NW.string(o.t.vw8oaW),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            roles: [
                {
                    id: '00',
                    name: '@everyone',
                    permissions: l.TP
                },
                {
                    id: '01',
                    name: 'officers (example)',
                    mentionable: !0,
                    hoist: !0,
                    permissions: r.$e(l.TP, s.Plq.MANAGE_ROLES, s.Plq.MANAGE_CHANNELS, s.Plq.KICK_MEMBERS, s.Plq.BAN_MEMBERS, s.Plq.MANAGE_NICKNAMES, s.Plq.MANAGE_GUILD_EXPRESSIONS, s.Plq.MANAGE_MESSAGES, s.Plq.SEND_TTS_MESSAGES),
                    color: 3066993
                }
            ],
            system_channel_id: '12'
        },
        HUB_STUDY: {
            id: 'HUB_STUDY',
            code: '2JBhzzca2vfT',
            label: o.NW.string(o.t.fYwSi4),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.NW.string(o.t['HY+vdH']),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.NW.string(o.t['3eM+Li']),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.NW.string(o.t.Qi0D7e),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.NW.string(o.t.yZIUV1),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.NW.string(o.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.NW.string(o.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.NW.string(o.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.NW.string(o.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.NW.string(o.t.XS6gcH),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.NW.formatToPlainString(o.t.LuNsNT, { number: 1 }),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.NW.formatToPlainString(o.t.LuNsNT, { number: 2 }),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_CLASS: {
            id: 'HUB_CLASS',
            code: 'r86WWBwTGspb',
            label: o.NW.string(o.t.e5gFS0),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.NW.string(o.t['HY+vdH']),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.NW.string(o.t['710tNj']),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.NW.string(o.t.Qi0D7e),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.NW.string(o.t.yZIUV1),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.NW.string(o.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.NW.string(o.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.NW.string(o.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.NW.string(o.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.NW.string(o.t.XS6gcH),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.NW.formatToPlainString(o.t.LuNsNT, { number: 1 }),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.NW.formatToPlainString(o.t.LuNsNT, { number: 2 }),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_SOCIAL: {
            id: 'HUB_SOCIAL',
            code: 'AvvtXE3mfbCR',
            label: o.NW.string(o.t.oOj7Ii),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.NW.string(o.t.yZIUV1),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.NW.string(o.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.NW.string(o.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: o.NW.string(o.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '04',
                    parent_id: '00',
                    name: o.NW.string(o.t.d4F8gI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.NW.string(o.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.NW.string(o.t.CLWKNj),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.NW.string(o.t.g3qPRk),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.NW.string(o.t.yQZpe3),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '02'
        },
        HUB_MAJOR: {
            id: 'HUB_MAJOR',
            code: 'FhmfDR6Arvsc',
            label: o.NW.string(o.t['9kly4e']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.NW.string(o.t['HY+vdH']),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.NW.string(o.t.yZCzMT),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.NW.string(o.t.Qi0D7e),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.NW.string(o.t.yZIUV1),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.NW.string(o.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.NW.string(o.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.NW.string(o.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.NW.string(o.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.NW.string(o.t.XS6gcH),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.NW.formatToPlainString(o.t.LuNsNT, { number: 1 }),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.NW.formatToPlainString(o.t.LuNsNT, { number: 2 }),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_DORM: {
            id: 'HUB_DORM',
            code: 'fkq8xHfrGE58',
            label: o.NW.string(o.t['ppGw/P']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.NW.string(o.t['HY+vdH']),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.NW.string(o.t['b2+FCQ']),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.NW.string(o.t.yZIUV1),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.NW.string(o.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.NW.string(o.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.NW.string(o.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.NW.string(o.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.NW.string(o.t.XS6gcH),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.NW.string(o.t.g3qPRk),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.NW.string(o.t.CLWKNj),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        }
    };
}
