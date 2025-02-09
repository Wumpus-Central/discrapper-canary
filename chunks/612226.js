t.d(n, {
    Q2: () => B,
    Rv: () => X,
    U6: () => j,
    UD: () => F,
    ZP: () => W,
    oT: () => z
}),
    t(411104),
    t(653041);
var i,
    r = t(346610),
    s = t(2818),
    l = t(186070),
    o = t(185514),
    a = t(395878),
    d = t(321697),
    c = t(775774),
    u = t(570408),
    E = t(438846),
    p = t(360038),
    b = t(175724),
    C = t(705371),
    h = t(138976),
    g = t(296805),
    A = t(561716),
    S = t(239748),
    _ = t(337482),
    m = t(679080),
    I = t(777019),
    f = t(523147),
    L = t(400332),
    O = t(510761),
    N = t(189509),
    T = t(673553),
    G = t(280492),
    R = t(746887),
    k = t(861007),
    H = t(89028),
    Z = t(300644),
    D = t(721383),
    M = t(207234),
    P = t(997292),
    v = t(743810),
    U = t(620212),
    x = t(188051),
    y = t(547420),
    V = t(981631),
    K = t(388032),
    B = (((i = {}).NAVIGATION = 'NAVIGATION'), (i.CHAT = 'CHAT'), (i.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (i.MISCELLANEOUS = 'MISCELLANEOUS'), (i.MESSAGE = 'MESSAGE'), (i.DND = 'DND'), i);
function F(e) {
    switch (e) {
        case 'NAVIGATION':
            return K.intl.string(K.t['yGE+jo']);
        case 'VOICE_AND_VIDEO':
            return K.intl.string(K.t.bI8F5u);
        case 'CHAT':
            return K.intl.string(K.t.hDhbb2);
        case 'MISCELLANEOUS':
            return K.intl.string(K.t.cBdwqq);
        case 'MESSAGE':
            return K.intl.string(K.t['5fpmX1']);
        case 'DND':
            return K.intl.string(K.t['69j6+/']);
    }
}
function j(e) {
    switch (e) {
        case 'MESSAGE':
            return K.intl.string(K.t.iepGDg);
        case 'DND':
            return K.intl.string(K.t.LBsB0d);
        default:
            return null;
    }
}
function w() {
    for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
    return n.map((e) => {
        let n = z[e];
        if (null == n) throw Error('getBindsFor(...): No bind for '.concat(n));
        return n.binds[0];
    });
}
let z = {
    [V.EkH.SERVER_NEXT]: O.nq,
    [V.EkH.SERVER_PREV]: O.X3,
    [V.EkH.CHANNEL_NEXT]: o.tQ,
    [V.EkH.CHANNEL_PREV]: o.x5,
    [V.EkH.NAVIGATE_BACK]: o.Nx,
    [V.EkH.NAVIGATE_FORWARD]: o.On,
    [V.EkH.UNREAD_NEXT]: v.pd,
    [V.EkH.UNREAD_PREV]: v.wk,
    [V.EkH.MENTION_CHANNEL_NEXT]: v.Nv,
    [V.EkH.MENTION_CHANNEL_PREV]: v.uX,
    [V.EkH.TOGGLE_PREVIOUS_GUILD]: o.$c,
    [V.EkH.JUMP_TO_GUILD]: p.u,
    [V.EkH.SUBMIT]: N.z,
    [V.EkH.TEXTAREA_FOCUS]: T.U,
    [V.EkH.MARK_CHANNEL_READ]: b.f,
    [V.EkH.MARK_SERVER_READ]: C.l,
    [V.EkH.TOGGLE_CHANNEL_PINS]: k.u,
    [V.EkH.TOGGLE_FOR_LATER]: H.f,
    [V.EkH.TOGGLE_INBOX]: M.a,
    [V.EkH.MARK_TOP_INBOX_CHANNEL_READ]: M.M,
    [V.EkH.TOGGLE_USERS]: P.r,
    [V.EkH.TOGGLE_HELP]: Z.O,
    [V.EkH.VIBE_WITH_WUMPUS]: x.w,
    [V.EkH.TOGGLE_MUTE]: G.iN,
    [V.EkH.TOGGLE_DEAFEN]: G.oV,
    [V.EkH.TOGGLE_CATEGORY_COLLAPSED]: R.u,
    [V.EkH.SEARCH_SOUNDBOARD]: f.Z,
    [V.EkH.SCROLL_UP]: _.B2,
    [V.EkH.SCROLL_DOWN]: _.gN,
    [V.EkH.QUICKSWITCHER_SHOW]: A.$,
    [V.EkH.CREATE_DM_GROUP]: a.K,
    [V.EkH.SEARCH_EMOJIS]: m.S,
    [V.EkH.SEARCH_GIFS]: I.O,
    [V.EkH.SEARCH_STICKERS]: L.U,
    [V.EkH.TOGGLE_HOTKEYS]: D._,
    [V.EkH.JUMP_TO_FIRST_UNREAD]: h.O,
    [V.EkH.CREATE_GUILD]: d.r,
    [V.EkH.UPLOAD_FILE]: U.U,
    [V.EkH.RETURN_TO_AUDIO_CHANNEL]: S.F,
    [V.EkH.CALL_ACCEPT]: l.IL,
    [V.EkH.CALL_START]: l.FI,
    [V.EkH.FOCUS_SEARCH]: u.I,
    [V.EkH.JUMP_TO_CURRENT_CALL]: E.K,
    [V.EkH.ZOOM_IN]: y.UF,
    [V.EkH.ZOOM_OUT]: y.RC,
    [V.EkH.ZOOM_RESET]: y.MY,
    [V.EkH.OPEN_APP_DIRECTORY]: g.T,
    [V.EkH.BROWSER_DEVTOOLS]: c.p
};
function X() {
    let e = [
        {
            description: K.intl.string(K.t.bx4Uy8),
            binds: w(V.EkH.SERVER_PREV, V.EkH.SERVER_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: K.intl.string(K.t['+Wem6u']),
            binds: w(V.EkH.CHANNEL_PREV, V.EkH.CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: K.intl.string(K.t['+2fcd3']),
            binds: w(V.EkH.NAVIGATE_BACK, V.EkH.NAVIGATE_FORWARD),
            group: 'NAVIGATION'
        },
        {
            description: K.intl.string(K.t.eVmj1N),
            binds: w(V.EkH.UNREAD_PREV, V.EkH.UNREAD_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: K.intl.string(K.t.EcqS7e),
            binds: w(V.EkH.MENTION_CHANNEL_PREV, V.EkH.MENTION_CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: K.intl.string(K.t['4I3pwc']),
            binds: w(V.EkH.JUMP_TO_CURRENT_CALL),
            group: 'NAVIGATION'
        },
        {
            description: K.intl.string(K.t['Bqss7+']),
            binds: w(V.EkH.TOGGLE_PREVIOUS_GUILD),
            group: 'NAVIGATION'
        },
        {
            description: K.intl.string(K.t.yYsRlJ),
            binds: w(V.EkH.QUICKSWITCHER_SHOW),
            group: 'NAVIGATION'
        },
        {
            description: K.intl.string(K.t.O7ouXF),
            binds: w(V.EkH.CREATE_GUILD),
            group: 'NAVIGATION',
            groupEnd: !0
        },
        {
            description: K.intl.string(K.t.Lns0FR),
            binds: ['mod+d'],
            group: 'DND'
        },
        {
            description: K.intl.string(K.t.dmMqa2),
            binds: ['up', 'down'],
            group: 'DND'
        },
        {
            description: K.intl.string(K.t['cs/HVF']),
            binds: ['spacebar', 'enter'],
            group: 'DND'
        },
        {
            description: K.intl.string(K.t['1ioMJS']),
            binds: ['esc'],
            group: 'DND',
            groupEnd: !0
        },
        {
            description: K.intl.string(K.t.UaXAPz),
            binds: w(V.EkH.MARK_SERVER_READ),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t['5X9vFh']),
            binds: w(V.EkH.MARK_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t.wxQFsr),
            binds: w(V.EkH.CREATE_DM_GROUP),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t['C+XV7e']),
            binds: w(V.EkH.TOGGLE_CHANNEL_PINS),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t['Q+YV/f']),
            binds: w(V.EkH.TOGGLE_INBOX),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t['YEjV+f']),
            binds: w(V.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t.AcBI9f),
            binds: w(V.EkH.TOGGLE_USERS),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t.JoxNnp),
            binds: w(V.EkH.SEARCH_EMOJIS),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t['3PHxo6']),
            binds: w(V.EkH.SEARCH_GIFS),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t.YFl7eX),
            binds: w(V.EkH.SEARCH_STICKERS),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t.L3RYYG),
            binds: w(V.EkH.SCROLL_UP, V.EkH.SCROLL_DOWN),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t['3HAurK']),
            binds: w(V.EkH.JUMP_TO_FIRST_UNREAD),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t.rrYBEh),
            binds: w(V.EkH.TEXTAREA_FOCUS),
            group: 'CHAT'
        },
        {
            description: K.intl.string(K.t.sUJlPD),
            binds: w(V.EkH.UPLOAD_FILE),
            group: 'CHAT',
            groupEnd: !0
        },
        {
            description: K.intl.string(K.t.tL6eVV),
            binds: w(V.EkH.TOGGLE_MUTE),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: K.intl.string(K.t['QXe/7e']),
            binds: w(V.EkH.TOGGLE_DEAFEN),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: K.intl.string(K.t.d6UIio),
            binds: w(V.EkH.CALL_ACCEPT),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: K.intl.string(K.t.IcEW09),
            binds: w(V.EkH.MARK_CHANNEL_READ),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: K.intl.string(K.t.WN2dsb),
            binds: w(V.EkH.CALL_START),
            group: 'VOICE_AND_VIDEO',
            groupEnd: !0
        },
        {
            description: K.intl.string(K.t.rUK0kp),
            binds: w(V.EkH.SEARCH_SOUNDBOARD),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: K.intl.string(K.t.vkGkSk),
            binds: w(V.EkH.TOGGLE_HELP),
            group: 'MISCELLANEOUS'
        },
        {
            description: K.intl.string(K.t['FJvZ8/']),
            binds: w(V.EkH.FOCUS_SEARCH),
            group: 'MISCELLANEOUS'
        },
        {
            description: K.intl.string(K.t.HnNtEB),
            binds: ['h+h+right+n+k'],
            group: 'MISCELLANEOUS',
            groupEnd: !0
        },
        {
            description: K.intl.string(K.t.fsBWmZ),
            binds: ['e'],
            group: 'MESSAGE'
        },
        {
            description: K.intl.string(K.t.xwMqDw),
            binds: ['backspace'],
            group: 'MESSAGE'
        },
        {
            description: K.intl.string(K.t['CvQ18/']),
            binds: ['p'],
            group: 'MESSAGE'
        },
        {
            description: K.intl.string(K.t.lfIHs7),
            binds: ['plus'],
            group: 'MESSAGE'
        },
        {
            description: K.intl.string(K.t['5IEsGx']),
            binds: ['r'],
            group: 'MESSAGE'
        },
        {
            description: K.intl.string(K.t.JrGD7O),
            binds: ['mod+c'],
            group: 'MESSAGE'
        },
        {
            description: K.intl.string(K.t.RpE9k5),
            binds: ['alt+enter'],
            group: 'MESSAGE'
        },
        {
            description: K.intl.string(K.t.rrYBEh),
            binds: ['escape'],
            group: 'MESSAGE',
            groupEnd: !0
        },
        {
            description: K.intl.string(K.t.z9c6mp),
            binds: w(V.EkH.VIBE_WITH_WUMPUS),
            group: 'MISCELLANEOUS'
        }
    ];
    (0, r.WT)({ location: 'keybinds' }, { autoTrackExposure: !1 }).canForwardMessages &&
        e.push({
            description: K.intl.string(K.t.zSyDdH),
            binds: ['f'],
            group: 'MESSAGE'
        });
    let { enabled: n, inInbox: t } = s.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
    return (
        n &&
            !t &&
            e.push({
                description: K.intl.string(K.t.IWNSoK),
                binds: w(V.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        e
    );
}
let W = 12633 == t.j ? z : null;
