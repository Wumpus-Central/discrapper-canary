n.d(t, {
    Tj: function () {
        return m;
    },
    WG: function () {
        return d;
    },
    ZD: function () {
        return h;
    },
    pD: function () {
        return c;
    }
}),
    n(653041);
var i = n(990547);
n(804098);
var r = n(544891),
    l = n(729345),
    a = n(210887);
n(358085);
var o = n(573261),
    s = n(981631),
    u = n(388032);
async function d() {
    return (
        await r.tn.get({
            url: s.ANM.BUG_REPORTS,
            rejectWithError: !1
        })
    ).body;
}
function c(e) {
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
    let d = [
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
            value: a.Z.theme
        }
    ];
    '' !== e.description &&
        d.push({
            name: 'description',
            value: e.description
        }),
        '' !== e.url &&
            d.push({
                name: 'external_url',
                value: e.url
            }),
        null != e.buildOverride &&
            d.push({
                name: 'build_override',
                value: e.buildOverride
            });
    let c = null === (r = e.feature) || void 0 === r ? void 0 : r.asana_inbox_id;
    null != c &&
        '' !== c &&
        d.push({
            name: 'asana_inbox_id',
            value: ''.concat(c)
        });
    let m = null === (u = e.feature) || void 0 === u ? void 0 : u.name;
    null != m &&
        '' !== m &&
        d.push({
            name: 'feature_name',
            value: m
        }),
        t.overridePlatformInformation &&
            (d.push({
                name: 'device',
                value: t.device
            }),
            d.push({
                name: 'os',
                value: t.operatingSystem
            }),
            d.push({
                name: 'os_version',
                value: t.operatingSystemVersion
            }),
            d.push({
                name: 'client_version',
                value: t.clientVersion
            }),
            d.push({
                name: 'client_build_number',
                value: t.clientBuildNumber
            }),
            d.push({
                name: 'release_channel',
                value: window.GLOBAL_ENV.RELEASE_CHANNEL
            }),
            d.push({
                name: 'locale',
                value: t.locale
            })),
        (0, l.E)(s.GU0.WEB_APP);
    try {
        return await o.Z.post({
            url: s.ANM.BUG_REPORTS,
            attachments: n,
            fields: d,
            trackedActionData: {
                event: i.NetworkActionNames.BUG_REPORT_SUBMIT,
                properties: {
                    priority: e.priority,
                    asana_inbox_id: c
                }
            },
            rejectWithError: !1
        });
    } catch (e) {
        return e;
    }
}
