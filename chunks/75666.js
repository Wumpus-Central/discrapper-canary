n.d(t, {
    AR: () => u,
    C2: () => s,
    Pp: () => _,
    VX: () => l,
    b7: () => f,
    sE: () => c,
});
var r = n(149765),
    i = n(700785),
    o = n(981631),
    a = n(388032),
    s = (function (e) {
        return (e[(e.GUILD = 0)] = "GUILD"), (e[(e.GUILD_SCHEDULED_EVENT = 1)] = "GUILD_SCHEDULED_EVENT"), e;
    })({}),
    l = (function (e) {
        return (
            (e.GUILD_TEMPLATES = "guild-templates"),
            (e.CUSTOMIZE_NEW_GUILD = "customize-new-guild"),
            (e.CHOOSE_GUILD = "choose-guild"),
            (e.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild"),
            (e.CONFIRMATION = "confirmation"),
            e
        );
    })({}),
    c = (function (e) {
        return (
            (e.CREATE = "CREATE"),
            (e.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB"),
            (e.HUB_STUDY = "HUB_STUDY"),
            (e.HUB_CLASS = "HUB_CLASS"),
            (e.HUB_SOCIAL = "HUB_SOCIAL"),
            (e.HUB_MAJOR = "HUB_MAJOR"),
            (e.HUB_DORM = "HUB_DORM"),
            e
        );
    })({}),
    u = (function (e) {
        return (
            (e[(e.ALL = -1)] = "ALL"),
            (e[(e.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
            (e[(e.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
            (e[(e.CLASS = 2)] = "CLASS"),
            (e[(e.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
            (e[(e.MISC = 5)] = "MISC"),
            e
        );
    })({});
let d = "883060064561299456";
function f(e) {
    return e === d
        ? [
              {
                  value: 1,
                  label: a.intl.string(a.t["Z+MPNz"]),
              },
              {
                  value: 2,
                  label: a.intl.string(a.t.dV9uBg),
              },
              {
                  value: 3,
                  label: a.intl.string(a.t.xoHQcn),
              },
              {
                  value: 5,
                  label: a.intl.string(a.t.Ao41rq),
              },
          ]
        : [
              {
                  value: 1,
                  label: a.intl.string(a.t.oNHFUF),
                  idealSize: 100,
              },
              {
                  value: 2,
                  label: a.intl.string(a.t.V1i8nZ),
              },
              {
                  value: 3,
                  label: a.intl.string(a.t.Z2ygQk),
                  idealSize: 50,
              },
              {
                  value: 5,
                  label: a.intl.string(a.t["0Bg9LS"]),
              },
          ];
}
function _() {
    return {
        CREATE: {
            id: "CREATE",
            code: "2TffvPucqHkN",
            label: a.intl.string(a.t["H3+6BA"]),
            channels: [],
            system_channel_id: null,
        },
        HUB_SCHOOL_CLUB: {
            id: "HUB_SCHOOL_CLUB",
            code: "UMUbvRpRZhS6",
            label: a.intl.string(a.t["mmFA5+"]),
            channels: [
                {
                    id: "00",
                    parent_id: null,
                    name: a.intl.string(a.t["VCAA/f"]),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "01",
                    parent_id: "00",
                    name: a.intl.string(a.t.GHQoER),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "02",
                    parent_id: "00",
                    name: a.intl.string(a.t.nSsoSE),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "03",
                    parent_id: "00",
                    name: a.intl.string(a.t.yZCzMT),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "10",
                    parent_id: null,
                    name: a.intl.string(a.t.mobYpK),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "11",
                    parent_id: "10",
                    name: a.intl.string(a.t.pIOigI),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "12",
                    parent_id: "10",
                    name: a.intl.string(a.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "13",
                    parent_id: "10",
                    name: a.intl.string(a.t.AIszv7),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "20",
                    parent_id: null,
                    name: a.intl.string(a.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "21",
                    parent_id: "20",
                    name: a.intl.string(a.t.XS6gcH),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "22",
                    parent_id: "20",
                    name: a.intl.string(a.t.hi1Ykp),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "22",
                    parent_id: "20",
                    name: a.intl.string(a.t.vw8oaW),
                    type: o.d4z.GUILD_VOICE,
                },
            ],
            roles: [
                {
                    id: "00",
                    name: "@everyone",
                    permissions: i.TP,
                },
                {
                    id: "01",
                    name: "officers (example)",
                    mentionable: !0,
                    hoist: !0,
                    permissions: r.$e(
                        i.TP,
                        o.Plq.MANAGE_ROLES,
                        o.Plq.MANAGE_CHANNELS,
                        o.Plq.KICK_MEMBERS,
                        o.Plq.BAN_MEMBERS,
                        o.Plq.MANAGE_NICKNAMES,
                        o.Plq.MANAGE_GUILD_EXPRESSIONS,
                        o.Plq.MANAGE_MESSAGES,
                        o.Plq.SEND_TTS_MESSAGES,
                    ),
                    color: 3066993,
                },
            ],
            system_channel_id: "12",
        },
        HUB_STUDY: {
            id: "HUB_STUDY",
            code: "2JBhzzca2vfT",
            label: a.intl.string(a.t.fYwSi4),
            channels: [
                {
                    id: "00",
                    parent_id: null,
                    name: a.intl.string(a.t["HY+vdH"]),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "01",
                    parent_id: "00",
                    name: a.intl.string(a.t["3eM+Li"]),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "02",
                    parent_id: "00",
                    name: a.intl.string(a.t.Qi0D7e),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "10",
                    parent_id: null,
                    name: a.intl.string(a.t.yZIUV1),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "11",
                    parent_id: "10",
                    name: a.intl.string(a.t.pIOigI),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "12",
                    parent_id: "10",
                    name: a.intl.string(a.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "12",
                    parent_id: "10",
                    name: a.intl.string(a.t.AIszv7),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "20",
                    parent_id: null,
                    name: a.intl.string(a.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "21",
                    parent_id: "20",
                    name: a.intl.string(a.t.XS6gcH),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "22",
                    parent_id: "20",
                    name: a.intl.formatToPlainString(a.t.LuNsNT, { number: 1 }),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "23",
                    parent_id: "20",
                    name: a.intl.formatToPlainString(a.t.LuNsNT, { number: 2 }),
                    type: o.d4z.GUILD_VOICE,
                },
            ],
            system_channel_id: "12",
        },
        HUB_CLASS: {
            id: "HUB_CLASS",
            code: "r86WWBwTGspb",
            label: a.intl.string(a.t.e5gFS0),
            channels: [
                {
                    id: "00",
                    parent_id: null,
                    name: a.intl.string(a.t["HY+vdH"]),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "01",
                    parent_id: "00",
                    name: a.intl.string(a.t["710tNj"]),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "02",
                    parent_id: "00",
                    name: a.intl.string(a.t.Qi0D7e),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "10",
                    parent_id: null,
                    name: a.intl.string(a.t.yZIUV1),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "11",
                    parent_id: "10",
                    name: a.intl.string(a.t.pIOigI),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "12",
                    parent_id: "10",
                    name: a.intl.string(a.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "13",
                    parent_id: "10",
                    name: a.intl.string(a.t.AIszv7),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "20",
                    parent_id: null,
                    name: a.intl.string(a.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "21",
                    parent_id: "20",
                    name: a.intl.string(a.t.XS6gcH),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "22",
                    parent_id: "20",
                    name: a.intl.formatToPlainString(a.t.LuNsNT, { number: 1 }),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "23",
                    parent_id: "20",
                    name: a.intl.formatToPlainString(a.t.LuNsNT, { number: 2 }),
                    type: o.d4z.GUILD_VOICE,
                },
            ],
            system_channel_id: "12",
        },
        HUB_SOCIAL: {
            id: "HUB_SOCIAL",
            code: "AvvtXE3mfbCR",
            label: a.intl.string(a.t.oOj7Ii),
            channels: [
                {
                    id: "00",
                    parent_id: null,
                    name: a.intl.string(a.t.yZIUV1),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "01",
                    parent_id: "00",
                    name: a.intl.string(a.t.pIOigI),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "02",
                    parent_id: "00",
                    name: a.intl.string(a.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "03",
                    parent_id: "00",
                    name: a.intl.string(a.t.AIszv7),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "04",
                    parent_id: "00",
                    name: a.intl.string(a.t.d4F8gI),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "10",
                    parent_id: null,
                    name: a.intl.string(a.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "11",
                    parent_id: "10",
                    name: a.intl.string(a.t.CLWKNj),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "12",
                    parent_id: "10",
                    name: a.intl.string(a.t.g3qPRk),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "13",
                    parent_id: "10",
                    name: a.intl.string(a.t.yQZpe3),
                    type: o.d4z.GUILD_VOICE,
                },
            ],
            system_channel_id: "02",
        },
        HUB_MAJOR: {
            id: "HUB_MAJOR",
            code: "FhmfDR6Arvsc",
            label: a.intl.string(a.t["9kly4e"]),
            channels: [
                {
                    id: "00",
                    parent_id: null,
                    name: a.intl.string(a.t["HY+vdH"]),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "01",
                    parent_id: "00",
                    name: a.intl.string(a.t.yZCzMT),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "02",
                    parent_id: "00",
                    name: a.intl.string(a.t.Qi0D7e),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "10",
                    parent_id: null,
                    name: a.intl.string(a.t.yZIUV1),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "11",
                    parent_id: "10",
                    name: a.intl.string(a.t.pIOigI),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "12",
                    parent_id: "10",
                    name: a.intl.string(a.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "13",
                    parent_id: "10",
                    name: a.intl.string(a.t.AIszv7),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "20",
                    parent_id: null,
                    name: a.intl.string(a.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "21",
                    parent_id: "20",
                    name: a.intl.string(a.t.XS6gcH),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "22",
                    parent_id: "20",
                    name: a.intl.formatToPlainString(a.t.LuNsNT, { number: 1 }),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "23",
                    parent_id: "20",
                    name: a.intl.formatToPlainString(a.t.LuNsNT, { number: 2 }),
                    type: o.d4z.GUILD_VOICE,
                },
            ],
            system_channel_id: "12",
        },
        HUB_DORM: {
            id: "HUB_DORM",
            code: "fkq8xHfrGE58",
            label: a.intl.string(a.t["ppGw/P"]),
            channels: [
                {
                    id: "00",
                    parent_id: null,
                    name: a.intl.string(a.t["HY+vdH"]),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "01",
                    parent_id: "00",
                    name: a.intl.string(a.t["b2+FCQ"]),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "10",
                    parent_id: null,
                    name: a.intl.string(a.t.yZIUV1),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "11",
                    parent_id: "10",
                    name: a.intl.string(a.t.pIOigI),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "12",
                    parent_id: "10",
                    name: a.intl.string(a.t.ao2wxs),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "13",
                    parent_id: "10",
                    name: a.intl.string(a.t.AIszv7),
                    type: o.d4z.GUILD_TEXT,
                },
                {
                    id: "20",
                    parent_id: null,
                    name: a.intl.string(a.t.vcKDMj),
                    type: o.d4z.GUILD_CATEGORY,
                },
                {
                    id: "21",
                    parent_id: "20",
                    name: a.intl.string(a.t.XS6gcH),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "22",
                    parent_id: "20",
                    name: a.intl.string(a.t.g3qPRk),
                    type: o.d4z.GUILD_VOICE,
                },
                {
                    id: "23",
                    parent_id: "20",
                    name: a.intl.string(a.t.CLWKNj),
                    type: o.d4z.GUILD_VOICE,
                },
            ],
            system_channel_id: "12",
        },
    };
}
