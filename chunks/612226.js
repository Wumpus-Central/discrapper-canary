n.d(t, {
    Q2: function () {
        return i;
    },
    Rv: function () {
        return z;
    },
    U6: function () {
        return H;
    },
    UD: function () {
        return G;
    },
    oT: function () {
        return W;
    }
}),
    n(411104),
    n(653041);
var i,
    r,
    s = n(346610),
    a = n(2818),
    l = n(186070),
    o = n(185514),
    c = n(395878),
    d = n(321697),
    u = n(775774),
    m = n(570408),
    g = n(438846),
    h = n(360038),
    p = n(175724),
    x = n(705371),
    f = n(138976),
    E = n(296805),
    _ = n(561716),
    C = n(239748),
    T = n(337482),
    S = n(679080),
    b = n(777019),
    I = n(523147),
    N = n(400332),
    v = n(510761),
    A = n(189509),
    j = n(673553),
    O = n(280492),
    R = n(746887),
    P = n(861007),
    D = n(89028),
    y = n(300644),
    B = n(721383),
    Z = n(207234),
    L = n(997292),
    M = n(743810),
    k = n(620212),
    w = n(188051),
    F = n(547420),
    U = n(981631),
    V = n(388032);
function G(e) {
    switch (e) {
        case 'NAVIGATION':
            return V.intl.string(V.t['yGE+jo']);
        case 'VOICE_AND_VIDEO':
            return V.intl.string(V.t.bI8F5u);
        case 'CHAT':
            return V.intl.string(V.t.hDhbb2);
        case 'MISCELLANEOUS':
            return V.intl.string(V.t.cBdwqq);
        case 'MESSAGE':
            return V.intl.string(V.t['5fpmX1']);
        case 'DND':
            return V.intl.string(V.t['69j6+/']);
    }
}
function H(e) {
    switch (e) {
        case 'MESSAGE':
            return V.intl.string(V.t.iepGDg);
        case 'DND':
            return V.intl.string(V.t.LBsB0d);
        default:
            return null;
    }
}
function Y() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = W[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
((r = i || (i = {})).NAVIGATION = 'NAVIGATION'), (r.CHAT = 'CHAT'), (r.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (r.MISCELLANEOUS = 'MISCELLANEOUS'), (r.MESSAGE = 'MESSAGE'), (r.DND = 'DND');
let W = {
    [U.EkH.SERVER_NEXT]: v.nq,
    [U.EkH.SERVER_PREV]: v.X3,
    [U.EkH.CHANNEL_NEXT]: o.tQ,
    [U.EkH.CHANNEL_PREV]: o.x5,
    [U.EkH.NAVIGATE_BACK]: o.Nx,
    [U.EkH.NAVIGATE_FORWARD]: o.On,
    [U.EkH.UNREAD_NEXT]: M.pd,
    [U.EkH.UNREAD_PREV]: M.wk,
    [U.EkH.MENTION_CHANNEL_NEXT]: M.Nv,
    [U.EkH.MENTION_CHANNEL_PREV]: M.uX,
    [U.EkH.TOGGLE_PREVIOUS_GUILD]: o.$c,
    [U.EkH.JUMP_TO_GUILD]: h.u,
    [U.EkH.SUBMIT]: A.z,
    [U.EkH.TEXTAREA_FOCUS]: j.U,
    [U.EkH.MARK_CHANNEL_READ]: p.f,
    [U.EkH.MARK_SERVER_READ]: x.l,
    [U.EkH.TOGGLE_CHANNEL_PINS]: P.u,
    [U.EkH.TOGGLE_FOR_LATER]: D.f,
    [U.EkH.TOGGLE_INBOX]: Z.a,
    [U.EkH.MARK_TOP_INBOX_CHANNEL_READ]: Z.M,
    [U.EkH.TOGGLE_USERS]: L.r,
    [U.EkH.TOGGLE_HELP]: y.O,
    [U.EkH.VIBE_WITH_WUMPUS]: w.w,
    [U.EkH.TOGGLE_MUTE]: O.iN,
    [U.EkH.TOGGLE_DEAFEN]: O.oV,
    [U.EkH.TOGGLE_CATEGORY_COLLAPSED]: R.u,
    [U.EkH.SEARCH_SOUNDBOARD]: I.Z,
    [U.EkH.SCROLL_UP]: T.B2,
    [U.EkH.SCROLL_DOWN]: T.gN,
    [U.EkH.QUICKSWITCHER_SHOW]: _.$,
    [U.EkH.CREATE_DM_GROUP]: c.K,
    [U.EkH.SEARCH_EMOJIS]: S.S,
    [U.EkH.SEARCH_GIFS]: b.O,
    [U.EkH.SEARCH_STICKERS]: N.U,
    [U.EkH.TOGGLE_HOTKEYS]: B._,
    [U.EkH.JUMP_TO_FIRST_UNREAD]: f.O,
    [U.EkH.CREATE_GUILD]: d.r,
    [U.EkH.UPLOAD_FILE]: k.U,
    [U.EkH.RETURN_TO_AUDIO_CHANNEL]: C.F,
    [U.EkH.CALL_ACCEPT]: l.IL,
    [U.EkH.CALL_START]: l.FI,
    [U.EkH.FOCUS_SEARCH]: m.I,
    [U.EkH.JUMP_TO_CURRENT_CALL]: g.K,
    [U.EkH.ZOOM_IN]: F.UF,
    [U.EkH.ZOOM_OUT]: F.RC,
    [U.EkH.ZOOM_RESET]: F.MY,
    [U.EkH.OPEN_APP_DIRECTORY]: E.T,
    [U.EkH.BROWSER_DEVTOOLS]: u.p
};
function z() {
    let e = [
        {
            description: V.intl.string(V.t.bx4Uy8),
            binds: Y(U.EkH.SERVER_PREV, U.EkH.SERVER_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: V.intl.string(V.t['+Wem6u']),
            binds: Y(U.EkH.CHANNEL_PREV, U.EkH.CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: V.intl.string(V.t['+2fcd3']),
            binds: Y(U.EkH.NAVIGATE_BACK, U.EkH.NAVIGATE_FORWARD),
            group: 'NAVIGATION'
        },
        {
            description: V.intl.string(V.t.eVmj1N),
            binds: Y(U.EkH.UNREAD_PREV, U.EkH.UNREAD_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: V.intl.string(V.t.EcqS7e),
            binds: Y(U.EkH.MENTION_CHANNEL_PREV, U.EkH.MENTION_CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: V.intl.string(V.t['4I3pwc']),
            binds: Y(U.EkH.JUMP_TO_CURRENT_CALL),
            group: 'NAVIGATION'
        },
        {
            description: V.intl.string(V.t['Bqss7+']),
            binds: Y(U.EkH.TOGGLE_PREVIOUS_GUILD),
            group: 'NAVIGATION'
        },
        {
            description: V.intl.string(V.t.yYsRlJ),
            binds: Y(U.EkH.QUICKSWITCHER_SHOW),
            group: 'NAVIGATION'
        },
        {
            description: V.intl.string(V.t.O7ouXF),
            binds: Y(U.EkH.CREATE_GUILD),
            group: 'NAVIGATION',
            groupEnd: !0
        },
        {
            description: V.intl.string(V.t.Lns0FR),
            binds: ['mod+d'],
            group: 'DND'
        },
        {
            description: V.intl.string(V.t.dmMqa2),
            binds: ['up', 'down'],
            group: 'DND'
        },
        {
            description: V.intl.string(V.t['cs/HVF']),
            binds: ['spacebar', 'enter'],
            group: 'DND'
        },
        {
            description: V.intl.string(V.t['1ioMJS']),
            binds: ['esc'],
            group: 'DND',
            groupEnd: !0
        },
        {
            description: V.intl.string(V.t.UaXAPz),
            binds: Y(U.EkH.MARK_SERVER_READ),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t['5X9vFh']),
            binds: Y(U.EkH.MARK_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t.wxQFsr),
            binds: Y(U.EkH.CREATE_DM_GROUP),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t['C+XV7e']),
            binds: Y(U.EkH.TOGGLE_CHANNEL_PINS),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t['Q+YV/f']),
            binds: Y(U.EkH.TOGGLE_INBOX),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t['YEjV+f']),
            binds: Y(U.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t.AcBI9f),
            binds: Y(U.EkH.TOGGLE_USERS),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t.JoxNnp),
            binds: Y(U.EkH.SEARCH_EMOJIS),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t['3PHxo6']),
            binds: Y(U.EkH.SEARCH_GIFS),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t.YFl7eX),
            binds: Y(U.EkH.SEARCH_STICKERS),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t.L3RYYG),
            binds: Y(U.EkH.SCROLL_UP, U.EkH.SCROLL_DOWN),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t['3HAurK']),
            binds: Y(U.EkH.JUMP_TO_FIRST_UNREAD),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t.rrYBEh),
            binds: Y(U.EkH.TEXTAREA_FOCUS),
            group: 'CHAT'
        },
        {
            description: V.intl.string(V.t.sUJlPD),
            binds: Y(U.EkH.UPLOAD_FILE),
            group: 'CHAT',
            groupEnd: !0
        },
        {
            description: V.intl.string(V.t.tL6eVV),
            binds: Y(U.EkH.TOGGLE_MUTE),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: V.intl.string(V.t['QXe/7e']),
            binds: Y(U.EkH.TOGGLE_DEAFEN),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: V.intl.string(V.t.d6UIio),
            binds: Y(U.EkH.CALL_ACCEPT),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: V.intl.string(V.t.IcEW09),
            binds: Y(U.EkH.MARK_CHANNEL_READ),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: V.intl.string(V.t.WN2dsb),
            binds: Y(U.EkH.CALL_START),
            group: 'VOICE_AND_VIDEO',
            groupEnd: !0
        },
        {
            description: V.intl.string(V.t.rUK0kp),
            binds: Y(U.EkH.SEARCH_SOUNDBOARD),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: V.intl.string(V.t.vkGkSk),
            binds: Y(U.EkH.TOGGLE_HELP),
            group: 'MISCELLANEOUS'
        },
        {
            description: V.intl.string(V.t['FJvZ8/']),
            binds: Y(U.EkH.FOCUS_SEARCH),
            group: 'MISCELLANEOUS'
        },
        {
            description: V.intl.string(V.t.HnNtEB),
            binds: ['h+h+right+n+k'],
            group: 'MISCELLANEOUS',
            groupEnd: !0
        },
        {
            description: V.intl.string(V.t.fsBWmZ),
            binds: ['e'],
            group: 'MESSAGE'
        },
        {
            description: V.intl.string(V.t.xwMqDw),
            binds: ['backspace'],
            group: 'MESSAGE'
        },
        {
            description: V.intl.string(V.t['CvQ18/']),
            binds: ['p'],
            group: 'MESSAGE'
        },
        {
            description: V.intl.string(V.t.lfIHs7),
            binds: ['plus'],
            group: 'MESSAGE'
        },
        {
            description: V.intl.string(V.t['5IEsGx']),
            binds: ['r'],
            group: 'MESSAGE'
        },
        {
            description: V.intl.string(V.t.JrGD7O),
            binds: ['mod+c'],
            group: 'MESSAGE'
        },
        {
            description: V.intl.string(V.t.RpE9k5),
            binds: ['alt+enter'],
            group: 'MESSAGE'
        },
        {
            description: V.intl.string(V.t.rrYBEh),
            binds: ['escape'],
            group: 'MESSAGE',
            groupEnd: !0
        },
        {
            description: V.intl.string(V.t.z9c6mp),
            binds: Y(U.EkH.VIBE_WITH_WUMPUS),
            group: 'MISCELLANEOUS'
        }
    ];
    (0, s.WT)({ location: 'keybinds' }, { autoTrackExposure: !1 }).canForwardMessages &&
        e.push({
            description: V.intl.string(V.t.zSyDdH),
            binds: ['f'],
            group: 'MESSAGE'
        });
    let { enabled: t, inInbox: n } = a.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
    return (
        t &&
            !n &&
            e.push({
                description: V.intl.string(V.t.IWNSoK),
                binds: Y(U.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        e
    );
}
t.ZP = 12633 == n.j ? W : null;
