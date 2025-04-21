n.d(t, {
    Tj: () => m,
    WG: () => u,
    ZD: () => h,
    pD: () => d
}),
    n(539854),
    n(953529);
var i = n(990547);
n(804098);
var r = n(544891),
    l = n(729345),
    a = n(210887);
n(358085);
var o = n(573261),
    s = n(981631),
    c = n(388032);
async function u() {
    return (
        await r.tn.get({
            url: s.ANM.BUG_REPORTS,
            rejectWithError: !1
        })
    ).body;
}
function d(e) {
    var t, n;
    return null != (n = null != (t = null == e ? void 0 : e.name) ? t : '' + (null == e ? void 0 : e.squad)) ? n : '';
}
function m() {
    return [
        {
            title: c.intl.string(c.t.VwIij4),
            description: c.intl.format(c.t.DOP8yc, {}),
            emoji: '801497159479722084',
            value: 0
        },
        {
            title: c.intl.string(c.t.rYfJoq),
            description: c.intl.format(c.t['+LEfDA'], {}),
            emoji: '410336837563973632',
            value: 1
        },
        {
            title: c.intl.string(c.t.Ia0skZ),
            description: c.intl.format(c.t.D4rbgY, {}),
            emoji: '841420679643529296',
            value: 2
        },
        {
            title: c.intl.string(c.t.KGsyFx),
            description: c.intl.format(c.t.Kmg64O, {}),
            emoji: '827645852352512021',
            value: 3
        }
    ];
}
async function h(e, t, n) {
    var r, c;
    let u = [
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
        u.push({
            name: 'description',
            value: e.description
        }),
        '' !== e.url &&
            u.push({
                name: 'external_url',
                value: e.url
            }),
        null != e.buildOverride &&
            u.push({
                name: 'build_override',
                value: e.buildOverride
            });
    let d = null == (r = e.feature) ? void 0 : r.asana_inbox_id;
    null != d &&
        '' !== d &&
        u.push({
            name: 'asana_inbox_id',
            value: ''.concat(d)
        });
    let m = null == (c = e.feature) ? void 0 : c.name;
    null != m &&
        '' !== m &&
        u.push({
            name: 'feature_name',
            value: m
        }),
        t.overridePlatformInformation &&
            (u.push({
                name: 'device',
                value: t.device
            }),
            u.push({
                name: 'os',
                value: t.operatingSystem
            }),
            u.push({
                name: 'os_version',
                value: t.operatingSystemVersion
            }),
            u.push({
                name: 'client_version',
                value: t.clientVersion
            }),
            u.push({
                name: 'client_build_number',
                value: t.clientBuildNumber
            }),
            u.push({
                name: 'release_channel',
                value: window.GLOBAL_ENV.RELEASE_CHANNEL
            }),
            u.push({
                name: 'locale',
                value: t.locale
            })),
        (0, l.E)(s.GU0.WEB_APP);
    try {
        return await o.Z.post({
            url: s.ANM.BUG_REPORTS,
            attachments: n,
            fields: u,
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
