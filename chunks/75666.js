n.d(t, {
    AR: () => I,
    C2: () => p,
    Pp: () => N,
    VX: () => o,
    b7: () => c,
    sE: () => g
});
var i,
    r,
    d,
    a,
    l = n(149765),
    _ = n(700785),
    s = n(981631),
    u = n(388032),
    p = (((i = {})[(i.GUILD = 0)] = 'GUILD'), (i[(i.GUILD_SCHEDULED_EVENT = 1)] = 'GUILD_SCHEDULED_EVENT'), i),
    o = (((r = {}).GUILD_TEMPLATES = 'guild-templates'), (r.CUSTOMIZE_NEW_GUILD = 'customize-new-guild'), (r.CHOOSE_GUILD = 'choose-guild'), (r.CUSTOMIZE_EXISTING_GUILD = 'customize-existing-guild'), (r.CONFIRMATION = 'confirmation'), r),
    g = (((d = {}).CREATE = 'CREATE'), (d.HUB_SCHOOL_CLUB = 'HUB_SCHOOL_CLUB'), (d.HUB_STUDY = 'HUB_STUDY'), (d.HUB_CLASS = 'HUB_CLASS'), (d.HUB_SOCIAL = 'HUB_SOCIAL'), (d.HUB_MAJOR = 'HUB_MAJOR'), (d.HUB_DORM = 'HUB_DORM'), d),
    I = (((a = {})[(a.ALL = -1)] = 'ALL'), (a[(a.UNCATEGORIZED = 0)] = 'UNCATEGORIZED'), (a[(a.SCHOOL_CLUB = 1)] = 'SCHOOL_CLUB'), (a[(a.CLASS = 2)] = 'CLASS'), (a[(a.STUDY_SOCIAL = 3)] = 'STUDY_SOCIAL'), (a[(a.MISC = 5)] = 'MISC'), a);
function c(e) {
    return '883060064561299456' === e
        ? [
              {
                  value: 1,
                  label: u.NW.string(u.t['Z+MPNz'])
              },
              {
                  value: 2,
                  label: u.NW.string(u.t.dV9uBg)
              },
              {
                  value: 3,
                  label: u.NW.string(u.t.xoHQcn)
              },
              {
                  value: 5,
                  label: u.NW.string(u.t.Ao41rq)
              }
          ]
        : [
              {
                  value: 1,
                  label: u.NW.string(u.t.oNHFUF),
                  idealSize: 100
              },
              {
                  value: 2,
                  label: u.NW.string(u.t.V1i8nZ)
              },
              {
                  value: 3,
                  label: u.NW.string(u.t.Z2ygQk),
                  idealSize: 50
              },
              {
                  value: 5,
                  label: u.NW.string(u.t['0Bg9LS'])
              }
          ];
}
function N() {
    return {
        CREATE: {
            id: 'CREATE',
            code: '2TffvPucqHkN',
            label: u.NW.string(u.t['H3+6BA']),
            channels: [],
            system_channel_id: null
        },
        HUB_SCHOOL_CLUB: {
            id: 'HUB_SCHOOL_CLUB',
            code: 'UMUbvRpRZhS6',
            label: u.NW.string(u.t['mmFA5+']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: u.NW.string(u.t['VCAA/f']),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: u.NW.string(u.t.GHQoER),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: u.NW.string(u.t.nSsoSE),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: u.NW.string(u.t.yZCzMT),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: u.NW.string(u.t.mobYpK),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: u.NW.string(u.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: u.NW.string(u.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: u.NW.string(u.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: u.NW.string(u.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: u.NW.string(u.t.XS6gcH),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: u.NW.string(u.t.hi1Ykp),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: u.NW.string(u.t.vw8oaW),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            roles: [
                {
                    id: '00',
                    name: '@everyone',
                    permissions: _.TP
                },
                {
                    id: '01',
                    name: 'officers (example)',
                    mentionable: !0,
                    hoist: !0,
                    permissions: l.$e(_.TP, s.Plq.MANAGE_ROLES, s.Plq.MANAGE_CHANNELS, s.Plq.KICK_MEMBERS, s.Plq.BAN_MEMBERS, s.Plq.MANAGE_NICKNAMES, s.Plq.MANAGE_GUILD_EXPRESSIONS, s.Plq.MANAGE_MESSAGES, s.Plq.SEND_TTS_MESSAGES),
                    color: 3066993
                }
            ],
            system_channel_id: '12'
        },
        HUB_STUDY: {
            id: 'HUB_STUDY',
            code: '2JBhzzca2vfT',
            label: u.NW.string(u.t.fYwSi4),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: u.NW.string(u.t['HY+vdH']),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: u.NW.string(u.t['3eM+Li']),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: u.NW.string(u.t.Qi0D7e),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: u.NW.string(u.t.yZIUV1),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: u.NW.string(u.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: u.NW.string(u.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: u.NW.string(u.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: u.NW.string(u.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: u.NW.string(u.t.XS6gcH),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: u.NW.formatToPlainString(u.t.LuNsNT, { number: 1 }),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: u.NW.formatToPlainString(u.t.LuNsNT, { number: 2 }),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_CLASS: {
            id: 'HUB_CLASS',
            code: 'r86WWBwTGspb',
            label: u.NW.string(u.t.e5gFS0),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: u.NW.string(u.t['HY+vdH']),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: u.NW.string(u.t['710tNj']),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: u.NW.string(u.t.Qi0D7e),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: u.NW.string(u.t.yZIUV1),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: u.NW.string(u.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: u.NW.string(u.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: u.NW.string(u.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: u.NW.string(u.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: u.NW.string(u.t.XS6gcH),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: u.NW.formatToPlainString(u.t.LuNsNT, { number: 1 }),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: u.NW.formatToPlainString(u.t.LuNsNT, { number: 2 }),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_SOCIAL: {
            id: 'HUB_SOCIAL',
            code: 'AvvtXE3mfbCR',
            label: u.NW.string(u.t.oOj7Ii),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: u.NW.string(u.t.yZIUV1),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: u.NW.string(u.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: u.NW.string(u.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: u.NW.string(u.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '04',
                    parent_id: '00',
                    name: u.NW.string(u.t.d4F8gI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: u.NW.string(u.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: u.NW.string(u.t.CLWKNj),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: u.NW.string(u.t.g3qPRk),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: u.NW.string(u.t.yQZpe3),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '02'
        },
        HUB_MAJOR: {
            id: 'HUB_MAJOR',
            code: 'FhmfDR6Arvsc',
            label: u.NW.string(u.t['9kly4e']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: u.NW.string(u.t['HY+vdH']),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: u.NW.string(u.t.yZCzMT),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: u.NW.string(u.t.Qi0D7e),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: u.NW.string(u.t.yZIUV1),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: u.NW.string(u.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: u.NW.string(u.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: u.NW.string(u.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: u.NW.string(u.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: u.NW.string(u.t.XS6gcH),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: u.NW.formatToPlainString(u.t.LuNsNT, { number: 1 }),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: u.NW.formatToPlainString(u.t.LuNsNT, { number: 2 }),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_DORM: {
            id: 'HUB_DORM',
            code: 'fkq8xHfrGE58',
            label: u.NW.string(u.t['ppGw/P']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: u.NW.string(u.t['HY+vdH']),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: u.NW.string(u.t['b2+FCQ']),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: u.NW.string(u.t.yZIUV1),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: u.NW.string(u.t.pIOigI),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: u.NW.string(u.t.ao2wxs),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: u.NW.string(u.t.AIszv7),
                    type: s.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: u.NW.string(u.t.vcKDMj),
                    type: s.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: u.NW.string(u.t.XS6gcH),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: u.NW.string(u.t.g3qPRk),
                    type: s.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: u.NW.string(u.t.CLWKNj),
                    type: s.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        }
    };
}
