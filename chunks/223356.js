i.d(t, {
    Tj: () => m,
    WG: () => c,
    ZD: () => h,
    pD: () => d
}),
    i(653041);
var n = i(990547);
i(804098);
var l = i(544891),
    r = i(729345),
    a = i(210887);
i(358085);
var o = i(573261),
    s = i(981631),
    u = i(388032);
async function c() {
    return (
        await l.tn.get({
            url: s.ANM.BUG_REPORTS,
            rejectWithError: !1
        })
    ).body;
}
function d(e) {
    var t, i;
    return null !== (i = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : '' + (null == e ? void 0 : e.squad)) && void 0 !== i ? i : '';
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
async function h(e, t, i) {
    var l, u;
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
            value: a.Z.theme
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
    let d = null === (l = e.feature) || void 0 === l ? void 0 : l.asana_inbox_id;
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
        (0, r.E)(s.GU0.WEB_APP);
    try {
        return await o.Z.post({
            url: s.ANM.BUG_REPORTS,
            attachments: i,
            fields: c,
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
