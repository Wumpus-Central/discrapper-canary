n.d(t, {
    Tj: function () {
        return m;
    },
    WG: function () {
        return c;
    },
    ZD: function () {
        return h;
    },
    pD: function () {
        return d;
    }
}),
    n(653041);
var i = n(990547);
n(804098);
var r = n(544891),
    l = n(729345),
    o = n(210887);
n(358085);
var a = n(573261),
    s = n(981631),
    u = n(388032);
async function c() {
    return (
        await r.tn.get({
            url: s.ANM.BUG_REPORTS,
            rejectWithError: !1
        })
    ).body;
}
function d(e) {
    var t, n;
    return null !== (n = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : '' + (null == e ? void 0 : e.squad)) && void 0 !== n ? n : '';
}
function m() {
    return [
        {
            title: u.intl.string(u.t.VwIij4),
            description: u.intl.format(u.t.DOP8yc, {}),
            emoji: '801497159479722084',
            value: 0
        },
        {
            title: u.intl.string(u.t.rYfJoq),
            description: u.intl.format(u.t['+LEfDA'], {}),
            emoji: '410336837563973632',
            value: 1
        },
        {
            title: u.intl.string(u.t.Ia0skZ),
            description: u.intl.format(u.t.D4rbgY, {}),
            emoji: '841420679643529296',
            value: 2
        },
        {
            title: u.intl.string(u.t.KGsyFx),
            description: u.intl.format(u.t.Kmg64O, {}),
            emoji: '827645852352512021',
            value: 3
        }
    ];
}
async function h(e, t, n) {
    var r, u;
    let c = [
        {
            name: 'name',
            value: e.name
        },
        {
            name: 'priority',
            value: ''.concat(e.priority)
        },
        {
            name: 'override_platform_information',
            value: ''.concat(t.overridePlatformInformation)
        },
        {
            name: 'theme',
            value: o.Z.theme
        }
    ];
    '' !== e.description &&
        c.push({
            name: 'description',
            value: e.description
        }),
        '' !== e.url &&
            c.push({
                name: 'external_url',
                value: e.url
            }),
        null != e.buildOverride &&
            c.push({
                name: 'build_override',
                value: e.buildOverride
            });
    let d = null === (r = e.feature) || void 0 === r ? void 0 : r.asana_inbox_id;
    null != d &&
        '' !== d &&
        c.push({
            name: 'asana_inbox_id',
            value: ''.concat(d)
        });
    let m = null === (u = e.feature) || void 0 === u ? void 0 : u.name;
    null != m &&
        '' !== m &&
        c.push({
            name: 'feature_name',
            value: m
        }),
        t.overridePlatformInformation &&
            (c.push({
                name: 'device',
                value: t.device
            }),
            c.push({
                name: 'os',
                value: t.operatingSystem
            }),
            c.push({
                name: 'os_version',
                value: t.operatingSystemVersion
            }),
            c.push({
                name: 'client_version',
                value: t.clientVersion
            }),
            c.push({
                name: 'client_build_number',
                value: t.clientBuildNumber
            }),
            c.push({
                name: 'release_channel',
                value: window.GLOBAL_ENV.RELEASE_CHANNEL
            }),
            c.push({
                name: 'locale',
                value: t.locale
            })),
        (0, l.E)(s.GU0.WEB_APP);
    try {
        return await a.Z.post({
            url: s.ANM.BUG_REPORTS,
            attachments: n,
            fields: c,
            trackedActionData: {
                event: i.NetworkActionNames.BUG_REPORT_SUBMIT,
                properties: {
                    priority: e.priority,
                    asana_inbox_id: d
                }
            },
            rejectWithError: !1
        });
    } catch (e) {
        return e;
    }
}
