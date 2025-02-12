t.d(n, {
    AR: () => g,
    C2: () => u,
    Pp: () => v,
    VX: () => _,
    b7: () => p,
    sE: () => m
});
var i,
    l,
    a,
    r,
    d = t(149765),
    s = t(700785),
    o = t(981631),
    c = t(388032),
    u = (((i = {})[(i.GUILD = 0)] = 'GUILD'), (i[(i.GUILD_SCHEDULED_EVENT = 1)] = 'GUILD_SCHEDULED_EVENT'), i),
    _ = (((l = {}).GUILD_TEMPLATES = 'guild-templates'), (l.CUSTOMIZE_NEW_GUILD = 'customize-new-guild'), (l.CHOOSE_GUILD = 'choose-guild'), (l.CUSTOMIZE_EXISTING_GUILD = 'customize-existing-guild'), (l.CONFIRMATION = 'confirmation'), l),
    m = (((a = {}).CREATE = 'CREATE'), (a.HUB_SCHOOL_CLUB = 'HUB_SCHOOL_CLUB'), (a.HUB_STUDY = 'HUB_STUDY'), (a.HUB_CLASS = 'HUB_CLASS'), (a.HUB_SOCIAL = 'HUB_SOCIAL'), (a.HUB_MAJOR = 'HUB_MAJOR'), (a.HUB_DORM = 'HUB_DORM'), a),
    g = (((r = {})[(r.ALL = -1)] = 'ALL'), (r[(r.UNCATEGORIZED = 0)] = 'UNCATEGORIZED'), (r[(r.SCHOOL_CLUB = 1)] = 'SCHOOL_CLUB'), (r[(r.CLASS = 2)] = 'CLASS'), (r[(r.STUDY_SOCIAL = 3)] = 'STUDY_SOCIAL'), (r[(r.MISC = 5)] = 'MISC'), r);
function p(e) {
    return '883060064561299456' === e
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
function v() {
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
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t.GHQoER),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: c.intl.string(c.t.nSsoSE),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: c.intl.string(c.t.yZCzMT),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.mobYpK),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.pIOigI),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: c.intl.string(c.t.AIszv7),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: c.intl.string(c.t.XS6gcH),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.string(c.t.hi1Ykp),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.string(c.t.vw8oaW),
                    type: o.d4z.GUILD_VOICE
                }
            ],
            roles: [
                {
                    id: '00',
                    name: '@everyone',
                    permissions: s.TP
                },
                {
                    id: '01',
                    name: 'officers (example)',
                    mentionable: !0,
                    hoist: !0,
                    permissions: d.$e(s.TP, o.Plq.MANAGE_ROLES, o.Plq.MANAGE_CHANNELS, o.Plq.KICK_MEMBERS, o.Plq.BAN_MEMBERS, o.Plq.MANAGE_NICKNAMES, o.Plq.MANAGE_GUILD_EXPRESSIONS, o.Plq.MANAGE_MESSAGES, o.Plq.SEND_TTS_MESSAGES),
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
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t['3eM+Li']),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: c.intl.string(c.t.Qi0D7e),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.yZIUV1),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.pIOigI),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.AIszv7),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: c.intl.string(c.t.XS6gcH),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 1 }),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 2 }),
                    type: o.d4z.GUILD_VOICE
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
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t['710tNj']),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: c.intl.string(c.t.Qi0D7e),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.yZIUV1),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.pIOigI),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: c.intl.string(c.t.AIszv7),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: c.intl.string(c.t.XS6gcH),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 1 }),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 2 }),
                    type: o.d4z.GUILD_VOICE
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
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t.pIOigI),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: c.intl.string(c.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: c.intl.string(c.t.AIszv7),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '04',
                    parent_id: '00',
                    name: c.intl.string(c.t.d4F8gI),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.CLWKNj),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.g3qPRk),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: c.intl.string(c.t.yQZpe3),
                    type: o.d4z.GUILD_VOICE
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
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t.yZCzMT),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: c.intl.string(c.t.Qi0D7e),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.yZIUV1),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.pIOigI),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: c.intl.string(c.t.AIszv7),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: c.intl.string(c.t.XS6gcH),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 1 }),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: c.intl.formatToPlainString(c.t.LuNsNT, { number: 2 }),
                    type: o.d4z.GUILD_VOICE
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
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: c.intl.string(c.t['b2+FCQ']),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: c.intl.string(c.t.yZIUV1),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: c.intl.string(c.t.pIOigI),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: c.intl.string(c.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: c.intl.string(c.t.AIszv7),
                    type: o.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: c.intl.string(c.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: c.intl.string(c.t.XS6gcH),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: c.intl.string(c.t.g3qPRk),
                    type: o.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: c.intl.string(c.t.CLWKNj),
                    type: o.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        }
    };
}
