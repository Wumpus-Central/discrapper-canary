n.d(e, {
    AR: () => g,
    C2: () => _,
    Pp: () => T,
    VX: () => c,
    b7: () => I,
    sE: () => E
});
var i,
    l,
    r,
    a,
    d = n(149765),
    s = n(700785),
    u = n(981631),
    o = n(388032),
    _ = (((i = {})[(i.GUILD = 0)] = 'GUILD'), (i[(i.GUILD_SCHEDULED_EVENT = 1)] = 'GUILD_SCHEDULED_EVENT'), i),
    c = (((l = {}).GUILD_TEMPLATES = 'guild-templates'), (l.CUSTOMIZE_NEW_GUILD = 'customize-new-guild'), (l.CHOOSE_GUILD = 'choose-guild'), (l.CUSTOMIZE_EXISTING_GUILD = 'customize-existing-guild'), (l.CONFIRMATION = 'confirmation'), l),
    E = (((r = {}).CREATE = 'CREATE'), (r.HUB_SCHOOL_CLUB = 'HUB_SCHOOL_CLUB'), (r.HUB_STUDY = 'HUB_STUDY'), (r.HUB_CLASS = 'HUB_CLASS'), (r.HUB_SOCIAL = 'HUB_SOCIAL'), (r.HUB_MAJOR = 'HUB_MAJOR'), (r.HUB_DORM = 'HUB_DORM'), r),
    g = (((a = {})[(a.ALL = -1)] = 'ALL'), (a[(a.UNCATEGORIZED = 0)] = 'UNCATEGORIZED'), (a[(a.SCHOOL_CLUB = 1)] = 'SCHOOL_CLUB'), (a[(a.CLASS = 2)] = 'CLASS'), (a[(a.STUDY_SOCIAL = 3)] = 'STUDY_SOCIAL'), (a[(a.MISC = 5)] = 'MISC'), a);
function I(t) {
    return '883060064561299456' === t
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
function T() {
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
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t.GHQoER),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.intl.string(o.t.nSsoSE),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: o.intl.string(o.t.yZCzMT),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.mobYpK),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.pIOigI),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.ao2wxs),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.intl.string(o.t.AIszv7),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.intl.string(o.t.XS6gcH),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.string(o.t.hi1Ykp),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.string(o.t.vw8oaW),
                    type: u.d4z.GUILD_VOICE
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
                    permissions: d.$e(s.TP, u.Plq.MANAGE_ROLES, u.Plq.MANAGE_CHANNELS, u.Plq.KICK_MEMBERS, u.Plq.BAN_MEMBERS, u.Plq.MANAGE_NICKNAMES, u.Plq.MANAGE_GUILD_EXPRESSIONS, u.Plq.MANAGE_MESSAGES, u.Plq.SEND_TTS_MESSAGES),
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
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t['3eM+Li']),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.intl.string(o.t.Qi0D7e),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.yZIUV1),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.pIOigI),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.ao2wxs),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.AIszv7),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.intl.string(o.t.XS6gcH),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 1 }),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 2 }),
                    type: u.d4z.GUILD_VOICE
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
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t['710tNj']),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.intl.string(o.t.Qi0D7e),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.yZIUV1),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.pIOigI),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.ao2wxs),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.intl.string(o.t.AIszv7),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.intl.string(o.t.XS6gcH),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 1 }),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 2 }),
                    type: u.d4z.GUILD_VOICE
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
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t.pIOigI),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.intl.string(o.t.ao2wxs),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: o.intl.string(o.t.AIszv7),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '04',
                    parent_id: '00',
                    name: o.intl.string(o.t.d4F8gI),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.CLWKNj),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.g3qPRk),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.intl.string(o.t.yQZpe3),
                    type: u.d4z.GUILD_VOICE
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
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t.yZCzMT),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: o.intl.string(o.t.Qi0D7e),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.yZIUV1),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.pIOigI),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.ao2wxs),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.intl.string(o.t.AIszv7),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.intl.string(o.t.XS6gcH),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 1 }),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.intl.formatToPlainString(o.t.LuNsNT, { number: 2 }),
                    type: u.d4z.GUILD_VOICE
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
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: o.intl.string(o.t['b2+FCQ']),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: o.intl.string(o.t.yZIUV1),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: o.intl.string(o.t.pIOigI),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: o.intl.string(o.t.ao2wxs),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: o.intl.string(o.t.AIszv7),
                    type: u.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: o.intl.string(o.t.vcKDMj),
                    type: u.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: o.intl.string(o.t.XS6gcH),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: o.intl.string(o.t.g3qPRk),
                    type: u.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: o.intl.string(o.t.CLWKNj),
                    type: u.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        }
    };
}
