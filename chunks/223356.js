i.d(t, {
    Tj: () => m,
    WG: () => u,
    ZD: () => h,
    pD: () => c
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
    d = i(388032);
async function u() {
    return (
        await l.tn.get({
            url: s.ANM.BUG_REPORTS,
            rejectWithError: !1
        })
    ).body;
}
function c(e) {
    var t, i;
    return null !== (i = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : '' + (null == e ? void 0 : e.squad)) && void 0 !== i ? i : '';
}
function m() {
    return [
        {
            title: d.intl.string(d.t.VwIij4),
            description: d.intl.format(d.t.DOP8yc, {}),
            emoji: '801497159479722084',
            value: 0
        },
        {
            title: d.intl.string(d.t.rYfJoq),
            description: d.intl.format(d.t['+LEfDA'], {}),
            emoji: '410336837563973632',
            value: 1
        },
        {
            title: d.intl.string(d.t.Ia0skZ),
            description: d.intl.format(d.t.D4rbgY, {}),
            emoji: '841420679643529296',
            value: 2
        },
        {
            title: d.intl.string(d.t.KGsyFx),
            description: d.intl.format(d.t.Kmg64O, {}),
            emoji: '827645852352512021',
            value: 3
        }
    ];
}
async function h(e, t, i) {
    var l, d;
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
    let c = null === (l = e.feature) || void 0 === l ? void 0 : l.asana_inbox_id;
    null != c &&
        '' !== c &&
        u.push({
            name: 'asana_inbox_id',
            value: ''.concat(c)
        });
    let m = null === (d = e.feature) || void 0 === d ? void 0 : d.name;
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
        (0, r.E)(s.GU0.WEB_APP);
    try {
        return await o.Z.post({
            url: s.ANM.BUG_REPORTS,
            attachments: i,
            fields: u,
            trackedActionData: {
                event: n.NetworkActionNames.BUG_REPORT_SUBMIT,
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
