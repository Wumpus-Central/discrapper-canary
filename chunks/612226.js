e.d(t, {
    Q2: function () {
        return i;
    },
    Rv: function () {
        return Y;
    },
    U6: function () {
        return x;
    },
    UD: function () {
        return w;
    },
    oT: function () {
        return W;
    }
}),
    e(411104),
    e(653041);
var i,
    o,
    r = e(346610),
    l = e(2818),
    d = e(186070),
    s = e(185514),
    u = e(395878),
    a = e(321697),
    c = e(775774),
    E = e(570408),
    C = e(438846),
    b = e(360038),
    A = e(175724),
    S = e(705371),
    p = e(138976),
    g = e(296805),
    f = e(561716),
    _ = e(239748),
    L = e(337482),
    O = e(679080),
    I = e(777019),
    T = e(523147),
    h = e(400332),
    N = e(510761),
    G = e(189509),
    H = e(673553),
    R = e(280492),
    k = e(746887),
    Z = e(861007),
    M = e(89028),
    m = e(300644),
    D = e(721383),
    P = e(207234),
    U = e(997292),
    y = e(743810),
    K = e(620212),
    B = e(188051),
    v = e(547420),
    V = e(981631),
    F = e(388032);
function w(n) {
    switch (n) {
        case 'NAVIGATION':
            return F.intl.string(F.t['yGE+jo']);
        case 'VOICE_AND_VIDEO':
            return F.intl.string(F.t.bI8F5u);
        case 'CHAT':
            return F.intl.string(F.t.hDhbb2);
        case 'MISCELLANEOUS':
            return F.intl.string(F.t.cBdwqq);
        case 'MESSAGE':
            return F.intl.string(F.t['5fpmX1']);
        case 'DND':
            return F.intl.string(F.t['69j6+/']);
    }
}
function x(n) {
    switch (n) {
        case 'MESSAGE':
            return F.intl.string(F.t.iepGDg);
        case 'DND':
            return F.intl.string(F.t.LBsB0d);
        default:
            return null;
    }
}
function X() {
    for (var n = arguments.length, t = Array(n), e = 0; e < n; e++) t[e] = arguments[e];
    return t.map((n) => {
        let t = W[n];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
((o = i || (i = {})).NAVIGATION = 'NAVIGATION'), (o.CHAT = 'CHAT'), (o.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (o.MISCELLANEOUS = 'MISCELLANEOUS'), (o.MESSAGE = 'MESSAGE'), (o.DND = 'DND');
let W = {
    [V.EkH.SERVER_NEXT]: N.nq,
    [V.EkH.SERVER_PREV]: N.X3,
    [V.EkH.CHANNEL_NEXT]: s.tQ,
    [V.EkH.CHANNEL_PREV]: s.x5,
    [V.EkH.NAVIGATE_BACK]: s.Nx,
    [V.EkH.NAVIGATE_FORWARD]: s.On,
    [V.EkH.UNREAD_NEXT]: y.pd,
    [V.EkH.UNREAD_PREV]: y.wk,
    [V.EkH.MENTION_CHANNEL_NEXT]: y.Nv,
    [V.EkH.MENTION_CHANNEL_PREV]: y.uX,
    [V.EkH.TOGGLE_PREVIOUS_GUILD]: s.$c,
    [V.EkH.JUMP_TO_GUILD]: b.u,
    [V.EkH.SUBMIT]: G.z,
    [V.EkH.TEXTAREA_FOCUS]: H.U,
    [V.EkH.MARK_CHANNEL_READ]: A.f,
    [V.EkH.MARK_SERVER_READ]: S.l,
    [V.EkH.TOGGLE_CHANNEL_PINS]: Z.u,
    [V.EkH.TOGGLE_FOR_LATER]: M.f,
    [V.EkH.TOGGLE_INBOX]: P.a,
    [V.EkH.MARK_TOP_INBOX_CHANNEL_READ]: P.M,
    [V.EkH.TOGGLE_USERS]: U.r,
    [V.EkH.TOGGLE_HELP]: m.O,
    [V.EkH.VIBE_WITH_WUMPUS]: B.w,
    [V.EkH.TOGGLE_MUTE]: R.iN,
    [V.EkH.TOGGLE_DEAFEN]: R.oV,
    [V.EkH.TOGGLE_CATEGORY_COLLAPSED]: k.u,
    [V.EkH.SEARCH_SOUNDBOARD]: T.Z,
    [V.EkH.SCROLL_UP]: L.B2,
    [V.EkH.SCROLL_DOWN]: L.gN,
    [V.EkH.QUICKSWITCHER_SHOW]: f.$,
    [V.EkH.CREATE_DM_GROUP]: u.K,
    [V.EkH.SEARCH_EMOJIS]: O.S,
    [V.EkH.SEARCH_GIFS]: I.O,
    [V.EkH.SEARCH_STICKERS]: h.U,
    [V.EkH.TOGGLE_HOTKEYS]: D._,
    [V.EkH.JUMP_TO_FIRST_UNREAD]: p.O,
    [V.EkH.CREATE_GUILD]: a.r,
    [V.EkH.UPLOAD_FILE]: K.U,
    [V.EkH.RETURN_TO_AUDIO_CHANNEL]: _.F,
    [V.EkH.CALL_ACCEPT]: d.IL,
    [V.EkH.CALL_START]: d.FI,
    [V.EkH.FOCUS_SEARCH]: E.I,
    [V.EkH.JUMP_TO_CURRENT_CALL]: C.K,
    [V.EkH.ZOOM_IN]: v.UF,
    [V.EkH.ZOOM_OUT]: v.RC,
    [V.EkH.ZOOM_RESET]: v.MY,
    [V.EkH.OPEN_APP_DIRECTORY]: g.T,
    [V.EkH.BROWSER_DEVTOOLS]: c.p
};
function Y() {
    let n = [
        {
            description: F.intl.string(F.t.bx4Uy8),
            binds: X(V.EkH.SERVER_PREV, V.EkH.SERVER_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t['+Wem6u']),
            binds: X(V.EkH.CHANNEL_PREV, V.EkH.CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t['+2fcd3']),
            binds: X(V.EkH.NAVIGATE_BACK, V.EkH.NAVIGATE_FORWARD),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t.eVmj1N),
            binds: X(V.EkH.UNREAD_PREV, V.EkH.UNREAD_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t.EcqS7e),
            binds: X(V.EkH.MENTION_CHANNEL_PREV, V.EkH.MENTION_CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t['4I3pwc']),
            binds: X(V.EkH.JUMP_TO_CURRENT_CALL),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t['Bqss7+']),
            binds: X(V.EkH.TOGGLE_PREVIOUS_GUILD),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t.yYsRlJ),
            binds: X(V.EkH.QUICKSWITCHER_SHOW),
            group: 'NAVIGATION'
        },
        {
            description: F.intl.string(F.t.O7ouXF),
            binds: X(V.EkH.CREATE_GUILD),
            group: 'NAVIGATION',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.Lns0FR),
            binds: ['mod+d'],
            group: 'DND'
        },
        {
            description: F.intl.string(F.t.dmMqa2),
            binds: ['up', 'down'],
            group: 'DND'
        },
        {
            description: F.intl.string(F.t['cs/HVF']),
            binds: ['spacebar', 'enter'],
            group: 'DND'
        },
        {
            description: F.intl.string(F.t['1ioMJS']),
            binds: ['esc'],
            group: 'DND',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.UaXAPz),
            binds: X(V.EkH.MARK_SERVER_READ),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['5X9vFh']),
            binds: X(V.EkH.MARK_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.wxQFsr),
            binds: X(V.EkH.CREATE_DM_GROUP),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['C+XV7e']),
            binds: X(V.EkH.TOGGLE_CHANNEL_PINS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['Q+YV/f']),
            binds: X(V.EkH.TOGGLE_INBOX),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['YEjV+f']),
            binds: X(V.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.AcBI9f),
            binds: X(V.EkH.TOGGLE_USERS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.JoxNnp),
            binds: X(V.EkH.SEARCH_EMOJIS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['3PHxo6']),
            binds: X(V.EkH.SEARCH_GIFS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.YFl7eX),
            binds: X(V.EkH.SEARCH_STICKERS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.L3RYYG),
            binds: X(V.EkH.SCROLL_UP, V.EkH.SCROLL_DOWN),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t['3HAurK']),
            binds: X(V.EkH.JUMP_TO_FIRST_UNREAD),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.rrYBEh),
            binds: X(V.EkH.TEXTAREA_FOCUS),
            group: 'CHAT'
        },
        {
            description: F.intl.string(F.t.sUJlPD),
            binds: X(V.EkH.UPLOAD_FILE),
            group: 'CHAT',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.tL6eVV),
            binds: X(V.EkH.TOGGLE_MUTE),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.intl.string(F.t['QXe/7e']),
            binds: X(V.EkH.TOGGLE_DEAFEN),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.intl.string(F.t.d6UIio),
            binds: X(V.EkH.CALL_ACCEPT),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.intl.string(F.t.IcEW09),
            binds: X(V.EkH.MARK_CHANNEL_READ),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.intl.string(F.t.WN2dsb),
            binds: X(V.EkH.CALL_START),
            group: 'VOICE_AND_VIDEO',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.rUK0kp),
            binds: X(V.EkH.SEARCH_SOUNDBOARD),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.intl.string(F.t.vkGkSk),
            binds: X(V.EkH.TOGGLE_HELP),
            group: 'MISCELLANEOUS'
        },
        {
            description: F.intl.string(F.t['FJvZ8/']),
            binds: X(V.EkH.FOCUS_SEARCH),
            group: 'MISCELLANEOUS'
        },
        {
            description: F.intl.string(F.t.HnNtEB),
            binds: ['h+h+right+n+k'],
            group: 'MISCELLANEOUS',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.fsBWmZ),
            binds: ['e'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t.xwMqDw),
            binds: ['backspace'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t['CvQ18/']),
            binds: ['p'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t.lfIHs7),
            binds: ['plus'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t['5IEsGx']),
            binds: ['r'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t.JrGD7O),
            binds: ['mod+c'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t.RpE9k5),
            binds: ['alt+enter'],
            group: 'MESSAGE'
        },
        {
            description: F.intl.string(F.t.rrYBEh),
            binds: ['escape'],
            group: 'MESSAGE',
            groupEnd: !0
        },
        {
            description: F.intl.string(F.t.z9c6mp),
            binds: X(V.EkH.VIBE_WITH_WUMPUS),
            group: 'MISCELLANEOUS'
        }
    ];
    (0, r.WT)({ location: 'keybinds' }, { autoTrackExposure: !1 }).canForwardMessages &&
        n.push({
            description: F.intl.string(F.t.zSyDdH),
            binds: ['f'],
            group: 'MESSAGE'
        });
    let { enabled: t, inInbox: e } = l.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
    return (
        t &&
            !e &&
            n.push({
                description: F.intl.string(F.t.IWNSoK),
                binds: X(V.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        n
    );
}
t.ZP = 12633 == e.j ? W : null;
