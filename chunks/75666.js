n.d(t, {
    AR: () => u,
    C2: () => s,
    Pp: () => _,
    VX: () => l,
    b7: () => f,
    sE: () => c
});
var r = n(149765),
    i = n(700785),
    a = n(981631),
    o = n(388032),
    s = (function (e) {
        return ((e[(e.GUILD = 0)] = 'GUILD'), (e[(e.GUILD_SCHEDULED_EVENT = 1)] = 'GUILD_SCHEDULED_EVENT'), e);
    })({}),
    l = (function (e) {
        return ((e.GUILD_TEMPLATES = 'guild-templates'), (e.CUSTOMIZE_NEW_GUILD = 'customize-new-guild'), (e.CHOOSE_GUILD = 'choose-guild'), (e.CUSTOMIZE_EXISTING_GUILD = 'customize-existing-guild'), (e.CONFIRMATION = 'confirmation'), e);
    })({}),
    c = (function (e) {
        return ((e.CREATE = 'CREATE'), (e.HUB_SCHOOL_CLUB = 'HUB_SCHOOL_CLUB'), (e.HUB_STUDY = 'HUB_STUDY'), (e.HUB_CLASS = 'HUB_CLASS'), (e.HUB_SOCIAL = 'HUB_SOCIAL'), (e.HUB_MAJOR = 'HUB_MAJOR'), (e.HUB_DORM = 'HUB_DORM'), e);
    })({}),
    u = (function (e) {
        return ((e[(e.ALL = -1)] = 'ALL'), (e[(e.UNCATEGORIZED = 0)] = 'UNCATEGORIZED'), (e[(e.SCHOOL_CLUB = 1)] = 'SCHOOL_CLUB'), (e[(e.CLASS = 2)] = 'CLASS'), (e[(e.STUDY_SOCIAL = 3)] = 'STUDY_SOCIAL'), (e[(e.MISC = 5)] = 'MISC'), e);
    })({});
let d = '883060064561299456';
function f(e) {
    return e === d
        ? [
              {
                  value: 1,
                  label: o.intl.string(o.t['Z+MPNz'])
              },
              {
                  value: 2,
                  label: o.intl.string(o.t.dV9uBg)
              },
              {
                  value: 3,
                  label: o.intl.string(o.t.xoHQcn)
              },
              {
                  value: 5,
                  label: o.intl.string(o.t.Ao41rq)
              }
          ]
        : [
              {
                  value: 1,
                  label: o.intl.string(o.t.oNHFUF),
                  idealSize: 100
              },
              {
                  value: 2,
                  label: o.intl.string(o.t.V1i8nZ)
              },
              {
                  value: 3,
                  label: o.intl.string(o.t.Z2ygQk),
                  idealSize: 50
              },
              {
                  value: 5,
                  label: o.intl.string(o.t['0Bg9LS'])
              }
          ];
}
function _() {
    return {
        CREATE: {
            id: 'CREATE',
            code: '2TffvPucqHkN',
            label: o.intl.string(o.t['H3+6BA']),
            channels: [],
            system_channel_id: null
        },
        HUB_SCHOOL_CLUB: {
            id: 'HUB_SCHOOL_CLUB',
            code: 'UMUbvRpRZhS6',
            label: o.intl.string(o.t['mmFA5+']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.intl.string(o.t['VCAA/f']),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t.GHQoER),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.intl.string(o.t.nSsoSE),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: o.intl.string(o.t.yZCzMT),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.mobYpK),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.pIOigI),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.ao2wxs),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.intl.string(o.t.AIszv7),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.intl.string(o.t.XS6gcH),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.string(o.t.hi1Ykp),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.string(o.t.vw8oaW),
                    type: a.d4z.GUILD_VOICE
                }
            ],
            roles: [
                {
                    id: '00',
                    name: '@everyone',
                    permissions: i.TP
                },
                {
                    id: '01',
                    name: 'officers (example)',
                    mentionable: !0,
                    hoist: !0,
                    permissions: r.$e(i.TP, a.Plq.MANAGE_ROLES, a.Plq.MANAGE_CHANNELS, a.Plq.KICK_MEMBERS, a.Plq.BAN_MEMBERS, a.Plq.MANAGE_NICKNAMES, a.Plq.MANAGE_GUILD_EXPRESSIONS, a.Plq.MANAGE_MESSAGES, a.Plq.SEND_TTS_MESSAGES),
                    color: 3066993
                }
            ],
            system_channel_id: '12'
        },
        HUB_STUDY: {
            id: 'HUB_STUDY',
            code: '2JBhzzca2vfT',
            label: o.intl.string(o.t.fYwSi4),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.intl.string(o.t['HY+vdH']),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t['3eM+Li']),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.intl.string(o.t.Qi0D7e),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.yZIUV1),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.pIOigI),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.ao2wxs),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.AIszv7),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.intl.string(o.t.XS6gcH),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 1 }),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 2 }),
                    type: a.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_CLASS: {
            id: 'HUB_CLASS',
            code: 'r86WWBwTGspb',
            label: o.intl.string(o.t.e5gFS0),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.intl.string(o.t['HY+vdH']),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t['710tNj']),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.intl.string(o.t.Qi0D7e),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.yZIUV1),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.pIOigI),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.ao2wxs),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.intl.string(o.t.AIszv7),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.intl.string(o.t.XS6gcH),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 1 }),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 2 }),
                    type: a.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_SOCIAL: {
            id: 'HUB_SOCIAL',
            code: 'AvvtXE3mfbCR',
            label: o.intl.string(o.t.oOj7Ii),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.intl.string(o.t.yZIUV1),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t.pIOigI),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.intl.string(o.t.ao2wxs),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: o.intl.string(o.t.AIszv7),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '04',
                    parent_id: '00',
                    name: o.intl.string(o.t.d4F8gI),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.CLWKNj),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.g3qPRk),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.intl.string(o.t.yQZpe3),
                    type: a.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '02'
        },
        HUB_MAJOR: {
            id: 'HUB_MAJOR',
            code: 'FhmfDR6Arvsc',
            label: o.intl.string(o.t['9kly4e']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.intl.string(o.t['HY+vdH']),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t.yZCzMT),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.intl.string(o.t.Qi0D7e),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.yZIUV1),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.pIOigI),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.ao2wxs),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.intl.string(o.t.AIszv7),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.intl.string(o.t.XS6gcH),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 1 }),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 2 }),
                    type: a.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_DORM: {
            id: 'HUB_DORM',
            code: 'fkq8xHfrGE58',
            label: o.intl.string(o.t['ppGw/P']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: o.intl.string(o.t['HY+vdH']),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t['b2+FCQ']),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.yZIUV1),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.pIOigI),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.ao2wxs),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.intl.string(o.t.AIszv7),
                    type: a.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: a.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.intl.string(o.t.XS6gcH),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.string(o.t.g3qPRk),
                    type: a.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.intl.string(o.t.CLWKNj),
                    type: a.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        }
    };
}
