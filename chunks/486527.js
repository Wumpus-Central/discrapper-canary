e.d(t, {
    AR: function () {
        return o;
    },
    C2: function () {
        return d;
    },
    Pp: function () {
        return T;
    },
    VX: function () {
        return c;
    },
    b7: function () {
        return I;
    },
    sE: function () {
        return u;
    }
});
var i,
    r,
    l,
    a,
    d,
    c,
    u,
    o,
    _ = e(149765),
    s = e(700785),
    E = e(981631),
    p = e(388032);
((i = d || (d = {}))[(i.GUILD = 0)] = 'GUILD'), (i[(i.GUILD_SCHEDULED_EVENT = 1)] = 'GUILD_SCHEDULED_EVENT'), ((r = c || (c = {})).GUILD_TEMPLATES = 'guild-templates'), (r.CUSTOMIZE_NEW_GUILD = 'customize-new-guild'), (r.CHOOSE_GUILD = 'choose-guild'), (r.CUSTOMIZE_EXISTING_GUILD = 'customize-existing-guild'), (r.CONFIRMATION = 'confirmation'), ((l = u || (u = {})).CREATE = 'CREATE'), (l.HUB_SCHOOL_CLUB = 'HUB_SCHOOL_CLUB'), (l.HUB_STUDY = 'HUB_STUDY'), (l.HUB_CLASS = 'HUB_CLASS'), (l.HUB_SOCIAL = 'HUB_SOCIAL'), (l.HUB_MAJOR = 'HUB_MAJOR'), (l.HUB_DORM = 'HUB_DORM'), ((a = o || (o = {}))[(a.ALL = -1)] = 'ALL'), (a[(a.UNCATEGORIZED = 0)] = 'UNCATEGORIZED'), (a[(a.SCHOOL_CLUB = 1)] = 'SCHOOL_CLUB'), (a[(a.CLASS = 2)] = 'CLASS'), (a[(a.STUDY_SOCIAL = 3)] = 'STUDY_SOCIAL'), (a[(a.MISC = 5)] = 'MISC');
function I(n) {
    return '883060064561299456' === n
        ? [
              {
                  value: 1,
                  label: p.intl.string(p.t['Z+MPNz'])
              },
              {
                  value: 2,
                  label: p.intl.string(p.t.dV9uBg)
              },
              {
                  value: 3,
                  label: p.intl.string(p.t.xoHQcn)
              },
              {
                  value: 5,
                  label: p.intl.string(p.t.Ao41rq)
              }
          ]
        : [
              {
                  value: 1,
                  label: p.intl.string(p.t.oNHFUF),
                  idealSize: 100
              },
              {
                  value: 2,
                  label: p.intl.string(p.t.V1i8nZ)
              },
              {
                  value: 3,
                  label: p.intl.string(p.t.Z2ygQk),
                  idealSize: 50
              },
              {
                  value: 5,
                  label: p.intl.string(p.t['0Bg9LS'])
              }
          ];
}
function T() {
    return {
        CREATE: {
            id: 'CREATE',
            code: '2TffvPucqHkN',
            label: p.intl.string(p.t['H3+6BA']),
            channels: [],
            system_channel_id: null
        },
        HUB_SCHOOL_CLUB: {
            id: 'HUB_SCHOOL_CLUB',
            code: 'UMUbvRpRZhS6',
            label: p.intl.string(p.t['mmFA5+']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t['VCAA/f']),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t.GHQoER),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: p.intl.string(p.t.nSsoSE),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: p.intl.string(p.t.yZCzMT),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.mobYpK),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.pIOigI),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.ao2wxs),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: p.intl.string(p.t.AIszv7),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: p.intl.string(p.t.XS6gcH),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.string(p.t.hi1Ykp),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.string(p.t.vw8oaW),
                    type: E.d4z.GUILD_VOICE
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
                    permissions: _.$e(s.TP, E.Plq.MANAGE_ROLES, E.Plq.MANAGE_CHANNELS, E.Plq.KICK_MEMBERS, E.Plq.BAN_MEMBERS, E.Plq.MANAGE_NICKNAMES, E.Plq.MANAGE_GUILD_EXPRESSIONS, E.Plq.MANAGE_MESSAGES, E.Plq.SEND_TTS_MESSAGES),
                    color: 3066993
                }
            ],
            system_channel_id: '12'
        },
        HUB_STUDY: {
            id: 'HUB_STUDY',
            code: '2JBhzzca2vfT',
            label: p.intl.string(p.t.fYwSi4),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t['HY+vdH']),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t['3eM+Li']),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: p.intl.string(p.t.Qi0D7e),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.yZIUV1),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.pIOigI),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.ao2wxs),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.AIszv7),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: p.intl.string(p.t.XS6gcH),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                    type: E.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_CLASS: {
            id: 'HUB_CLASS',
            code: 'r86WWBwTGspb',
            label: p.intl.string(p.t.e5gFS0),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t['HY+vdH']),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t['710tNj']),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: p.intl.string(p.t.Qi0D7e),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.yZIUV1),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.pIOigI),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.ao2wxs),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: p.intl.string(p.t.AIszv7),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: p.intl.string(p.t.XS6gcH),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                    type: E.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_SOCIAL: {
            id: 'HUB_SOCIAL',
            code: 'AvvtXE3mfbCR',
            label: p.intl.string(p.t.oOj7Ii),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t.yZIUV1),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t.pIOigI),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: p.intl.string(p.t.ao2wxs),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: p.intl.string(p.t.AIszv7),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '04',
                    parent_id: '00',
                    name: p.intl.string(p.t.d4F8gI),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.CLWKNj),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.g3qPRk),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: p.intl.string(p.t.yQZpe3),
                    type: E.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '02'
        },
        HUB_MAJOR: {
            id: 'HUB_MAJOR',
            code: 'FhmfDR6Arvsc',
            label: p.intl.string(p.t['9kly4e']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t['HY+vdH']),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t.yZCzMT),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: p.intl.string(p.t.Qi0D7e),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.yZIUV1),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.pIOigI),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.ao2wxs),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: p.intl.string(p.t.AIszv7),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: p.intl.string(p.t.XS6gcH),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 1 }),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: p.intl.formatToPlainString(p.t.LuNsNT, { number: 2 }),
                    type: E.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_DORM: {
            id: 'HUB_DORM',
            code: 'fkq8xHfrGE58',
            label: p.intl.string(p.t['ppGw/P']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: p.intl.string(p.t['HY+vdH']),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: p.intl.string(p.t['b2+FCQ']),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: p.intl.string(p.t.yZIUV1),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: p.intl.string(p.t.pIOigI),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: p.intl.string(p.t.ao2wxs),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: p.intl.string(p.t.AIszv7),
                    type: E.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: p.intl.string(p.t.vcKDMj),
                    type: E.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: p.intl.string(p.t.XS6gcH),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: p.intl.string(p.t.g3qPRk),
                    type: E.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: p.intl.string(p.t.CLWKNj),
                    type: E.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        }
    };
}
