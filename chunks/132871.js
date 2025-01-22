r.r(n),
    r.d(n, {
        ApplicationDirectoryEntrypointNames: function () {
            return a;
        },
        ApplicationDirectoryViews: function () {
            return i;
        },
        getCurrentView: function () {
            return _;
        },
        getPreviousView: function () {
            return h;
        },
        resetApplicationDirectoryHistory: function () {
            return E;
        },
        setEntrypoint: function () {
            return m;
        },
        setGuildId: function () {
            return g;
        },
        setTrackedOpenedFromExternalEntrypoint: function () {
            return v;
        },
        useApplicationDirectoryHistory: function () {
            return p;
        }
    });
var i,
    a,
    o = r(512969),
    s = r(15729),
    l = r(731965),
    u = r(703656),
    c = r(264043),
    d = r(981631);
!(function (e) {
    (e.HOME = 'home'), (e.SEARCH = 'search'), (e.APPLICATION = 'application');
})(i || (i = {})),
    !(function (e) {
        (e.EXTERNAL = 'External'), (e.KEYBOARD_SHORTCUT = 'Keyboard Shortcut'), (e.APPLICATION_DIRECTORY_URL = 'Application Directory URL'), (e.APPLICATION_DIRECTORY_PROFILE_EMBED = 'Application Directory Profile Embed'), (e.APPLICATION_DIRECTORY_UPSELL_MODAL = 'Application Directory Upsell Modal'), (e.GUILD_HEADER_POPOUT = 'Guild Header Popout'), (e.GUILD_SETTINGS = 'Guild Settings'), (e.GUILD_INTEGRATION_SETTINGS = 'Guild Integration Settings'), (e.GUILD_CONTEXT_MENU = 'Guild Context Menu'), (e.OAUTH2_EMBED = 'OAuth2 Embed'), (e.GLOBAL_DISCOVERY_BUTTON = 'Global Discovery Button'), (e.GLOBAL_DISCOVERY_SIDEBAR = 'Global Discovery Sidebar');
    })(a || (a = {}));
let f = (0, s.U)(() => ({
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    })),
    p = f;
function h() {
    let {
        location: { state: e }
    } = (0, u.s1)();
    return null == e ? void 0 : e.previousView;
}
function _() {
    var e, n;
    let {
            location: { pathname: r }
        } = (0, u.s1)(),
        i = (0, o.LX)(r, {
            path: d.Z5c.APPLICATION_DIRECTORY,
            exact: !0
        }),
        a = (0, o.LX)(r, {
            path: d.Z5c.APPLICATION_DIRECTORY_SEARCH,
            exact: !0
        }),
        s = (0, o.LX)(r, {
            path: [d.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId'), d.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section')],
            exact: !0
        }),
        { applicationId: l, section: f } = null !== (e = null == s ? void 0 : s.params) && void 0 !== e ? e : {};
    if (null != i) return { type: 'home' };
    if (null != a) return { type: 'search' };
    if (null != s && null != l) {
        let e = null === (n = c.Z.getApplication(l)) || void 0 === n ? void 0 : n.name;
        return {
            type: 'application',
            applicationId: l,
            applicationName: e,
            section: f
        };
    }
}
function m(e) {
    (0, l.j)(() => f.setState({ entrypoint: e }));
}
function g(e) {
    (0, l.j)(() => f.setState({ guildId: e }));
}
function E() {
    (0, l.j)(() => {
        f.setState({
            entrypoint: null,
            guildId: null
        });
    });
}
function v(e) {
    (0, l.j)(() => f.setState({ trackedOpenedFromExternalEntrypoint: e }));
}
