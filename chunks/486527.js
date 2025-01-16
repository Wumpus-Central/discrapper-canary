t.d(n, {
    AR: function () {
        return s;
    },
    C2: function () {
        return o;
    },
    Pp: function () {
        return f;
    },
    VX: function () {
        return d;
    },
    b7: function () {
        return I;
    },
    sE: function () {
        return l;
    }
});
var i,
    a,
    r,
    c,
    o,
    d,
    l,
    s,
    _ = t(149765),
    u = t(700785),
    p = t(981631),
    m = t(388032);
((i = o || (o = {}))[(i.GUILD = 0)] = 'GUILD'), (i[(i.GUILD_SCHEDULED_EVENT = 1)] = 'GUILD_SCHEDULED_EVENT'), ((a = d || (d = {})).GUILD_TEMPLATES = 'guild-templates'), (a.CUSTOMIZE_NEW_GUILD = 'customize-new-guild'), (a.CHOOSE_GUILD = 'choose-guild'), (a.CUSTOMIZE_EXISTING_GUILD = 'customize-existing-guild'), (a.CONFIRMATION = 'confirmation'), ((r = l || (l = {})).CREATE = 'CREATE'), (r.HUB_SCHOOL_CLUB = 'HUB_SCHOOL_CLUB'), (r.HUB_STUDY = 'HUB_STUDY'), (r.HUB_CLASS = 'HUB_CLASS'), (r.HUB_SOCIAL = 'HUB_SOCIAL'), (r.HUB_MAJOR = 'HUB_MAJOR'), (r.HUB_DORM = 'HUB_DORM'), ((c = s || (s = {}))[(c.ALL = -1)] = 'ALL'), (c[(c.UNCATEGORIZED = 0)] = 'UNCATEGORIZED'), (c[(c.SCHOOL_CLUB = 1)] = 'SCHOOL_CLUB'), (c[(c.CLASS = 2)] = 'CLASS'), (c[(c.STUDY_SOCIAL = 3)] = 'STUDY_SOCIAL'), (c[(c.MISC = 5)] = 'MISC');
function I(e) {
    return '883060064561299456' === e
        ? [
              {
                  value: 1,
                  label: m.intl.string(m.t['Z+MPNz'])
              },
              {
                  value: 2,
                  label: m.intl.string(m.t.dV9uBg)
              },
              {
                  value: 3,
                  label: m.intl.string(m.t.xoHQcn)
              },
              {
                  value: 5,
                  label: m.intl.string(m.t.Ao41rq)
              }
          ]
        : [
              {
                  value: 1,
                  label: m.intl.string(m.t.oNHFUF),
                  idealSize: 100
              },
              {
                  value: 2,
                  label: m.intl.string(m.t.V1i8nZ)
              },
              {
                  value: 3,
                  label: m.intl.string(m.t.Z2ygQk),
                  idealSize: 50
              },
              {
                  value: 5,
                  label: m.intl.string(m.t['0Bg9LS'])
              }
          ];
}
function f() {
    return {
        CREATE: {
            id: 'CREATE',
            code: '2TffvPucqHkN',
            label: m.intl.string(m.t['H3+6BA']),
            channels: [],
            system_channel_id: null
        },
        HUB_SCHOOL_CLUB: {
            id: 'HUB_SCHOOL_CLUB',
            code: 'UMUbvRpRZhS6',
            label: m.intl.string(m.t['mmFA5+']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: m.intl.string(m.t['VCAA/f']),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: m.intl.string(m.t.GHQoER),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: m.intl.string(m.t.nSsoSE),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: m.intl.string(m.t.yZCzMT),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: m.intl.string(m.t.mobYpK),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: m.intl.string(m.t.pIOigI),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: m.intl.string(m.t.ao2wxs),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: m.intl.string(m.t.AIszv7),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: m.intl.string(m.t.vcKDMj),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: m.intl.string(m.t.XS6gcH),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: m.intl.string(m.t.hi1Ykp),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: m.intl.string(m.t.vw8oaW),
                    type: p.d4z.GUILD_VOICE
                }
            ],
            roles: [
                {
                    id: '00',
                    name: '@everyone',
                    permissions: u.TP
                },
                {
                    id: '01',
                    name: 'officers (example)',
                    mentionable: !0,
                    hoist: !0,
                    permissions: _.$e(u.TP, p.Plq.MANAGE_ROLES, p.Plq.MANAGE_CHANNELS, p.Plq.KICK_MEMBERS, p.Plq.BAN_MEMBERS, p.Plq.MANAGE_NICKNAMES, p.Plq.MANAGE_GUILD_EXPRESSIONS, p.Plq.MANAGE_MESSAGES, p.Plq.SEND_TTS_MESSAGES),
                    color: 3066993
                }
            ],
            system_channel_id: '12'
        },
        HUB_STUDY: {
            id: 'HUB_STUDY',
            code: '2JBhzzca2vfT',
            label: m.intl.string(m.t.fYwSi4),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: m.intl.string(m.t['HY+vdH']),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: m.intl.string(m.t['3eM+Li']),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: m.intl.string(m.t.Qi0D7e),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: m.intl.string(m.t.yZIUV1),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: m.intl.string(m.t.pIOigI),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: m.intl.string(m.t.ao2wxs),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: m.intl.string(m.t.AIszv7),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: m.intl.string(m.t.vcKDMj),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: m.intl.string(m.t.XS6gcH),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 1 }),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 2 }),
                    type: p.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_CLASS: {
            id: 'HUB_CLASS',
            code: 'r86WWBwTGspb',
            label: m.intl.string(m.t.e5gFS0),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: m.intl.string(m.t['HY+vdH']),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: m.intl.string(m.t['710tNj']),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: m.intl.string(m.t.Qi0D7e),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: m.intl.string(m.t.yZIUV1),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: m.intl.string(m.t.pIOigI),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: m.intl.string(m.t.ao2wxs),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: m.intl.string(m.t.AIszv7),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: m.intl.string(m.t.vcKDMj),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: m.intl.string(m.t.XS6gcH),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 1 }),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 2 }),
                    type: p.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_SOCIAL: {
            id: 'HUB_SOCIAL',
            code: 'AvvtXE3mfbCR',
            label: m.intl.string(m.t.oOj7Ii),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: m.intl.string(m.t.yZIUV1),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: m.intl.string(m.t.pIOigI),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: m.intl.string(m.t.ao2wxs),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '03',
                    parent_id: '00',
                    name: m.intl.string(m.t.AIszv7),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '04',
                    parent_id: '00',
                    name: m.intl.string(m.t.d4F8gI),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: m.intl.string(m.t.vcKDMj),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: m.intl.string(m.t.CLWKNj),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: m.intl.string(m.t.g3qPRk),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: m.intl.string(m.t.yQZpe3),
                    type: p.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '02'
        },
        HUB_MAJOR: {
            id: 'HUB_MAJOR',
            code: 'FhmfDR6Arvsc',
            label: m.intl.string(m.t['9kly4e']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: m.intl.string(m.t['HY+vdH']),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: m.intl.string(m.t.yZCzMT),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '02',
                    parent_id: '00',
                    name: m.intl.string(m.t.Qi0D7e),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: m.intl.string(m.t.yZIUV1),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: m.intl.string(m.t.pIOigI),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: m.intl.string(m.t.ao2wxs),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: m.intl.string(m.t.AIszv7),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: m.intl.string(m.t.vcKDMj),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: m.intl.string(m.t.XS6gcH),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 1 }),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: m.intl.formatToPlainString(m.t.LuNsNT, { number: 2 }),
                    type: p.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        },
        HUB_DORM: {
            id: 'HUB_DORM',
            code: 'fkq8xHfrGE58',
            label: m.intl.string(m.t['ppGw/P']),
            channels: [
                {
                    id: '00',
                    parent_id: null,
                    name: m.intl.string(m.t['HY+vdH']),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '01',
                    parent_id: '00',
                    name: m.intl.string(m.t['b2+FCQ']),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '10',
                    parent_id: null,
                    name: m.intl.string(m.t.yZIUV1),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '11',
                    parent_id: '10',
                    name: m.intl.string(m.t.pIOigI),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '12',
                    parent_id: '10',
                    name: m.intl.string(m.t.ao2wxs),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '13',
                    parent_id: '10',
                    name: m.intl.string(m.t.AIszv7),
                    type: p.d4z.GUILD_TEXT
                },
                {
                    id: '20',
                    parent_id: null,
                    name: m.intl.string(m.t.vcKDMj),
                    type: p.d4z.GUILD_CATEGORY
                },
                {
                    id: '21',
                    parent_id: '20',
                    name: m.intl.string(m.t.XS6gcH),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '22',
                    parent_id: '20',
                    name: m.intl.string(m.t.g3qPRk),
                    type: p.d4z.GUILD_VOICE
                },
                {
                    id: '23',
                    parent_id: '20',
                    name: m.intl.string(m.t.CLWKNj),
                    type: p.d4z.GUILD_VOICE
                }
            ],
            system_channel_id: '12'
        }
    };
}
