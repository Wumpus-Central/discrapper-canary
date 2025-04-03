r.d(t, {
    Tj: () => m,
    WG: () => u,
    ZD: () => h,
    pD: () => d
}),
    r(653041),
    r(266796);
var n = r(990547);
r(804098);
var i = r(544891),
    l = r(729345),
    a = r(210887);
r(358085);
var o = r(573261),
    s = r(981631),
    c = r(388032);
async function u() {
    return (
        await i.tn.get({
            url: s.ANM.BUG_REPORTS,
            rejectWithError: !1
        })
    ).body;
}
function d(e) {
    var t, r;
    return null != (r = null != (t = null == e ? void 0 : e.name) ? t : '' + (null == e ? void 0 : e.squad)) ? r : '';
}
function m() {
    return [
        {
            title: c.NW.string(c.t.VwIij4),
            description: c.NW.format(c.t.DOP8yc, {}),
            emoji: '801497159479722084',
            value: 0
        },
        {
            title: c.NW.string(c.t.rYfJoq),
            description: c.NW.format(c.t['+LEfDA'], {}),
            emoji: '410336837563973632',
            value: 1
        },
        {
            title: c.NW.string(c.t.Ia0skZ),
            description: c.NW.format(c.t.D4rbgY, {}),
            emoji: '841420679643529296',
            value: 2
        },
        {
            title: c.NW.string(c.t.KGsyFx),
            description: c.NW.format(c.t.Kmg64O, {}),
            emoji: '827645852352512021',
            value: 3
        }
    ];
}
async function h(e, t, r) {
    var i, c;
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
    let d = null == (i = e.feature) ? void 0 : i.asana_inbox_id;
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
            attachments: r,
            fields: u,
            trackedActionData: {
                event: n.NetworkActionNames.BUG_REPORT_SUBMIT,
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
