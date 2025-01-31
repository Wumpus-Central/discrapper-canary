t.d(e, {
    AR: () => m,
    C2: () => s,
    Pp: () => g,
    VX: () => p,
    b7: () => I,
    sE: () => u
});
var i,
    a,
    r,
    o,
    l = t(149765),
    d = t(700785),
    _ = t(981631),
    c = t(388032),
    s = (((i = {})[(i.GUILD = 0)] = 'GUILD'), (i[(i.GUILD_SCHEDULED_EVENT = 1)] = 'GUILD_SCHEDULED_EVENT'), i),
    p = (((a = {}).GUILD_TEMPLATES = 'guild-templates'), (a.CUSTOMIZE_NEW_GUILD = 'customize-new-guild'), (a.CHOOSE_GUILD = 'choose-guild'), (a.CUSTOMIZE_EXISTING_GUILD = 'customize-existing-guild'), (a.CONFIRMATION = 'confirmation'), a),
    u = (((r = {}).CREATE = 'CREATE'), (r.HUB_SCHOOL_CLUB = 'HUB_SCHOOL_CLUB'), (r.HUB_STUDY = 'HUB_STUDY'), (r.HUB_CLASS = 'HUB_CLASS'), (r.HUB_SOCIAL = 'HUB_SOCIAL'), (r.HUB_MAJOR = 'HUB_MAJOR'), (r.HUB_DORM = 'HUB_DORM'), r),
    m = (((o = {})[(o.ALL = -1)] = 'ALL'), (o[(o.UNCATEGORIZED = 0)] = 'UNCATEGORIZED'), (o[(o.SCHOOL_CLUB = 1)] = 'SCHOOL_CLUB'), (o[(o.CLASS = 2)] = 'CLASS'), (o[(o.STUDY_SOCIAL = 3)] = 'STUDY_SOCIAL'), (o[(o.MISC = 5)] = 'MISC'), o);
function I(n) {
    return '883060064561299456' === n
        ? [
              {
                  value: 1,
                  label: c.intl.string(c.t['Z+MPNz'])
              },
              {
                  value: 2,
                  label: c.intl.string(c.t.dV9uBg)
              },
              {
                  value: 3,
                  label: c.intl.string(c.t.xoHQcn)
              },
              {
                  value: 5,
                  label: c.intl.string(c.t.Ao41rq)
              }
          ]
        : [
              {
                  value: 1,
                  label: c.intl.string(c.t.oNHFUF),
                  idealSize: 100
              },
              {
                  value: 2,
                  label: c.intl.string(c.t.V1i8nZ)
              },
              {
                  value: 3,
                  label: c.intl.string(c.t.Z2ygQk),
                  idealSize: 50
              },
              {
                  value: 5,
                  label: c.intl.string(c.t['0Bg9LS'])
              }
          ];
}
function g() {
    return {
        CREATE: {
            id: 'CREATE',
            code: '2TffvPucqHkN',
            label: c.intl.string(c.t['H3+6BA']),
            channels: [],
            system_channel_id: null
        },
        HUB_SCHOOL_CLUB: {
            id: 'HUB_SCHOOL_CLUB',
            code: 'UMUbvRpRZhS6',
            label: c.intl.string(c.t['mmFA5+']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: c.intl.string(c.t['VCAA/f']),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t.GHQoER),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: c.intl.string(c.t.nSsoSE),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: c.intl.string(c.t.yZCzMT),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.mobYpK),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.pIOigI),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.ao2wxs),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: c.intl.string(c.t.AIszv7),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: c.intl.string(c.t.XS6gcH),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.string(c.t.hi1Ykp),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.string(c.t.vw8oaW),
                    type: _.d4z.GUILD_VOICE
                }
            ],
            roles: [
                {
                    id: '00',
                    name: '@everyone',
                    permissions: d.TP
                },
                {
                    id: '01',
                    name: 'officers (example)',
                    mentionable: !0,
                    hoist: !0,
                    permissions: l.$e(d.TP, _.Plq.MANAGE_ROLES, _.Plq.MANAGE_CHANNELS, _.Plq.KICK_MEMBERS, _.Plq.BAN_MEMBERS, _.Plq.MANAGE_NICKNAMES, _.Plq.MANAGE_GUILD_EXPRESSIONS, _.Plq.MANAGE_MESSAGES, _.Plq.SEND_TTS_MESSAGES),
                    color: 3066993
                }
            ],
            system_channel_id: '12'
        },
        HUB_STUDY: {
            id: 'HUB_STUDY',
            code: '2JBhzzca2vfT',
            label: c.intl.string(c.t.fYwSi4),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: c.intl.string(c.t['HY+vdH']),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t['3eM+Li']),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: c.intl.string(c.t.Qi0D7e),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.yZIUV1),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.pIOigI),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.ao2wxs),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.AIszv7),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: c.intl.string(c.t.XS6gcH),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 1 }),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 2 }),
                    type: _.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_CLASS: {
            id: 'HUB_CLASS',
            code: 'r86WWBwTGspb',
            label: c.intl.string(c.t.e5gFS0),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: c.intl.string(c.t['HY+vdH']),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t['710tNj']),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: c.intl.string(c.t.Qi0D7e),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.yZIUV1),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.pIOigI),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.ao2wxs),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: c.intl.string(c.t.AIszv7),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: c.intl.string(c.t.XS6gcH),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 1 }),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 2 }),
                    type: _.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_SOCIAL: {
            id: 'HUB_SOCIAL',
            code: 'AvvtXE3mfbCR',
            label: c.intl.string(c.t.oOj7Ii),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: c.intl.string(c.t.yZIUV1),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t.pIOigI),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: c.intl.string(c.t.ao2wxs),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: c.intl.string(c.t.AIszv7),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '04',
                    parent_id: '00',
                    name: c.intl.string(c.t.d4F8gI),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.CLWKNj),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.g3qPRk),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: c.intl.string(c.t.yQZpe3),
                    type: _.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '02'
        },
        HUB_MAJOR: {
            id: 'HUB_MAJOR',
            code: 'FhmfDR6Arvsc',
            label: c.intl.string(c.t['9kly4e']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: c.intl.string(c.t['HY+vdH']),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t.yZCzMT),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: c.intl.string(c.t.Qi0D7e),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.yZIUV1),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.pIOigI),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.ao2wxs),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: c.intl.string(c.t.AIszv7),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: c.intl.string(c.t.XS6gcH),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 1 }),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 2 }),
                    type: _.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_DORM: {
            id: 'HUB_DORM',
            code: 'fkq8xHfrGE58',
            label: c.intl.string(c.t['ppGw/P']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: c.intl.string(c.t['HY+vdH']),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t['b2+FCQ']),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.yZIUV1),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.pIOigI),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.ao2wxs),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: c.intl.string(c.t.AIszv7),
                    type: _.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: _.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: c.intl.string(c.t.XS6gcH),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.string(c.t.g3qPRk),
                    type: _.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: c.intl.string(c.t.CLWKNj),
                    type: _.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        }
    };
}
