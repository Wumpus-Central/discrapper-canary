n.d(t, {
    Q2: () => G,
    Rv: () => W,
    U6: () => H,
    UD: () => F,
    ZP: () => K,
    oT: () => Y
}),
    n(411104),
    n(653041);
var i,
    s = n(346610),
    r = n(2818),
    l = n(186070),
    a = n(185514),
    o = n(395878),
    c = n(321697),
    d = n(775774),
    u = n(570408),
    m = n(438846),
    h = n(360038),
    g = n(175724),
    _ = n(705371),
    x = n(138976),
    p = n(296805),
    E = n(561716),
    C = n(239748),
    f = n(337482),
    T = n(679080),
    N = n(777019),
    I = n(523147),
    S = n(400332),
    b = n(510761),
    v = n(189509),
    j = n(673553),
    A = n(280492),
    O = n(746887),
    R = n(861007),
    P = n(89028),
    D = n(300644),
    y = n(721383),
    Z = n(207234),
    k = n(997292),
    L = n(743810),
    B = n(620212),
    M = n(188051),
    w = n(547420),
    V = n(981631),
    U = n(388032),
    G = (((i = {}).NAVIGATION = 'NAVIGATION'), (i.CHAT = 'CHAT'), (i.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (i.MISCELLANEOUS = 'MISCELLANEOUS'), (i.MESSAGE = 'MESSAGE'), (i.DND = 'DND'), i);
function F(e) {
    switch (e) {
        case 'NAVIGATION':
            return U.intl.string(U.t['yGE+jo']);
        case 'VOICE_AND_VIDEO':
            return U.intl.string(U.t.bI8F5u);
        case 'CHAT':
            return U.intl.string(U.t.hDhbb2);
        case 'MISCELLANEOUS':
            return U.intl.string(U.t.cBdwqq);
        case 'MESSAGE':
            return U.intl.string(U.t['5fpmX1']);
        case 'DND':
            return U.intl.string(U.t['69j6+/']);
    }
}
function H(e) {
    switch (e) {
        case 'MESSAGE':
            return U.intl.string(U.t.iepGDg);
        case 'DND':
            return U.intl.string(U.t.LBsB0d);
        default:
            return null;
    }
}
function z() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = Y[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let Y = {
    [V.EkH.SERVER_NEXT]: b.nq,
    [V.EkH.SERVER_PREV]: b.X3,
    [V.EkH.CHANNEL_NEXT]: a.tQ,
    [V.EkH.CHANNEL_PREV]: a.x5,
    [V.EkH.NAVIGATE_BACK]: a.Nx,
    [V.EkH.NAVIGATE_FORWARD]: a.On,
    [V.EkH.UNREAD_NEXT]: L.pd,
    [V.EkH.UNREAD_PREV]: L.wk,
    [V.EkH.MENTION_CHANNEL_NEXT]: L.Nv,
    [V.EkH.MENTION_CHANNEL_PREV]: L.uX,
    [V.EkH.TOGGLE_PREVIOUS_GUILD]: a.$c,
    [V.EkH.JUMP_TO_GUILD]: h.u,
    [V.EkH.SUBMIT]: v.z,
    [V.EkH.TEXTAREA_FOCUS]: j.U,
    [V.EkH.MARK_CHANNEL_READ]: g.f,
    [V.EkH.MARK_SERVER_READ]: _.l,
    [V.EkH.TOGGLE_CHANNEL_PINS]: R.u,
    [V.EkH.TOGGLE_FOR_LATER]: P.f,
    [V.EkH.TOGGLE_INBOX]: Z.a,
    [V.EkH.MARK_TOP_INBOX_CHANNEL_READ]: Z.M,
    [V.EkH.TOGGLE_USERS]: k.r,
    [V.EkH.TOGGLE_HELP]: D.O,
    [V.EkH.VIBE_WITH_WUMPUS]: M.w,
    [V.EkH.TOGGLE_MUTE]: A.iN,
    [V.EkH.TOGGLE_DEAFEN]: A.oV,
    [V.EkH.TOGGLE_CATEGORY_COLLAPSED]: O.u,
    [V.EkH.SEARCH_SOUNDBOARD]: I.Z,
    [V.EkH.SCROLL_UP]: f.B2,
    [V.EkH.SCROLL_DOWN]: f.gN,
    [V.EkH.QUICKSWITCHER_SHOW]: E.$,
    [V.EkH.CREATE_DM_GROUP]: o.K,
    [V.EkH.SEARCH_EMOJIS]: T.S,
    [V.EkH.SEARCH_GIFS]: N.O,
    [V.EkH.SEARCH_STICKERS]: S.U,
    [V.EkH.TOGGLE_HOTKEYS]: y._,
    [V.EkH.JUMP_TO_FIRST_UNREAD]: x.O,
    [V.EkH.CREATE_GUILD]: c.r,
    [V.EkH.UPLOAD_FILE]: B.U,
    [V.EkH.RETURN_TO_AUDIO_CHANNEL]: C.F,
    [V.EkH.CALL_ACCEPT]: l.IL,
    [V.EkH.CALL_START]: l.FI,
    [V.EkH.FOCUS_SEARCH]: u.I,
    [V.EkH.JUMP_TO_CURRENT_CALL]: m.K,
    [V.EkH.ZOOM_IN]: w.UF,
    [V.EkH.ZOOM_OUT]: w.RC,
    [V.EkH.ZOOM_RESET]: w.MY,
    [V.EkH.OPEN_APP_DIRECTORY]: p.T,
    [V.EkH.BROWSER_DEVTOOLS]: d.p
};
function W() {
    let e = [
        {
            description: U.intl.string(U.t.bx4Uy8),
            binds: z(V.EkH.SERVER_PREV, V.EkH.SERVER_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: U.intl.string(U.t['+Wem6u']),
            binds: z(V.EkH.CHANNEL_PREV, V.EkH.CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: U.intl.string(U.t['+2fcd3']),
            binds: z(V.EkH.NAVIGATE_BACK, V.EkH.NAVIGATE_FORWARD),
            group: 'NAVIGATION'
        },
        {
            description: U.intl.string(U.t.eVmj1N),
            binds: z(V.EkH.UNREAD_PREV, V.EkH.UNREAD_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: U.intl.string(U.t.EcqS7e),
            binds: z(V.EkH.MENTION_CHANNEL_PREV, V.EkH.MENTION_CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: U.intl.string(U.t['4I3pwc']),
            binds: z(V.EkH.JUMP_TO_CURRENT_CALL),
            group: 'NAVIGATION'
        },
        {
            description: U.intl.string(U.t['Bqss7+']),
            binds: z(V.EkH.TOGGLE_PREVIOUS_GUILD),
            group: 'NAVIGATION'
        },
        {
            description: U.intl.string(U.t.yYsRlJ),
            binds: z(V.EkH.QUICKSWITCHER_SHOW),
            group: 'NAVIGATION'
        },
        {
            description: U.intl.string(U.t.O7ouXF),
            binds: z(V.EkH.CREATE_GUILD),
            group: 'NAVIGATION',
            groupEnd: !0
        },
        {
            description: U.intl.string(U.t.Lns0FR),
            binds: ['mod+d'],
            group: 'DND'
        },
        {
            description: U.intl.string(U.t.dmMqa2),
            binds: ['up', 'down'],
            group: 'DND'
        },
        {
            description: U.intl.string(U.t['cs/HVF']),
            binds: ['spacebar', 'enter'],
            group: 'DND'
        },
        {
            description: U.intl.string(U.t['1ioMJS']),
            binds: ['esc'],
            group: 'DND',
            groupEnd: !0
        },
        {
            description: U.intl.string(U.t.UaXAPz),
            binds: z(V.EkH.MARK_SERVER_READ),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t['5X9vFh']),
            binds: z(V.EkH.MARK_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t.wxQFsr),
            binds: z(V.EkH.CREATE_DM_GROUP),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t['C+XV7e']),
            binds: z(V.EkH.TOGGLE_CHANNEL_PINS),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t['Q+YV/f']),
            binds: z(V.EkH.TOGGLE_INBOX),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t['YEjV+f']),
            binds: z(V.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t.AcBI9f),
            binds: z(V.EkH.TOGGLE_USERS),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t.JoxNnp),
            binds: z(V.EkH.SEARCH_EMOJIS),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t['3PHxo6']),
            binds: z(V.EkH.SEARCH_GIFS),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t.YFl7eX),
            binds: z(V.EkH.SEARCH_STICKERS),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t.L3RYYG),
            binds: z(V.EkH.SCROLL_UP, V.EkH.SCROLL_DOWN),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t['3HAurK']),
            binds: z(V.EkH.JUMP_TO_FIRST_UNREAD),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t.rrYBEh),
            binds: z(V.EkH.TEXTAREA_FOCUS),
            group: 'CHAT'
        },
        {
            description: U.intl.string(U.t.sUJlPD),
            binds: z(V.EkH.UPLOAD_FILE),
            group: 'CHAT',
            groupEnd: !0
        },
        {
            description: U.intl.string(U.t.tL6eVV),
            binds: z(V.EkH.TOGGLE_MUTE),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: U.intl.string(U.t['QXe/7e']),
            binds: z(V.EkH.TOGGLE_DEAFEN),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: U.intl.string(U.t.d6UIio),
            binds: z(V.EkH.CALL_ACCEPT),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: U.intl.string(U.t.IcEW09),
            binds: z(V.EkH.MARK_CHANNEL_READ),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: U.intl.string(U.t.WN2dsb),
            binds: z(V.EkH.CALL_START),
            group: 'VOICE_AND_VIDEO',
            groupEnd: !0
        },
        {
            description: U.intl.string(U.t.rUK0kp),
            binds: z(V.EkH.SEARCH_SOUNDBOARD),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: U.intl.string(U.t.vkGkSk),
            binds: z(V.EkH.TOGGLE_HELP),
            group: 'MISCELLANEOUS'
        },
        {
            description: U.intl.string(U.t['FJvZ8/']),
            binds: z(V.EkH.FOCUS_SEARCH),
            group: 'MISCELLANEOUS'
        },
        {
            description: U.intl.string(U.t.HnNtEB),
            binds: ['h+h+right+n+k'],
            group: 'MISCELLANEOUS',
            groupEnd: !0
        },
        {
            description: U.intl.string(U.t.fsBWmZ),
            binds: ['e'],
            group: 'MESSAGE'
        },
        {
            description: U.intl.string(U.t.xwMqDw),
            binds: ['backspace'],
            group: 'MESSAGE'
        },
        {
            description: U.intl.string(U.t['CvQ18/']),
            binds: ['p'],
            group: 'MESSAGE'
        },
        {
            description: U.intl.string(U.t.lfIHs7),
            binds: ['plus'],
            group: 'MESSAGE'
        },
        {
            description: U.intl.string(U.t['5IEsGx']),
            binds: ['r'],
            group: 'MESSAGE'
        },
        {
            description: U.intl.string(U.t.JrGD7O),
            binds: ['mod+c'],
            group: 'MESSAGE'
        },
        {
            description: U.intl.string(U.t.RpE9k5),
            binds: ['alt+enter'],
            group: 'MESSAGE'
        },
        {
            description: U.intl.string(U.t.rrYBEh),
            binds: ['escape'],
            group: 'MESSAGE',
            groupEnd: !0
        },
        {
            description: U.intl.string(U.t.z9c6mp),
            binds: z(V.EkH.VIBE_WITH_WUMPUS),
            group: 'MISCELLANEOUS'
        }
    ];
    (0, s.WT)({ location: 'keybinds' }, { autoTrackExposure: !1 }).canForwardMessages &&
        e.push({
            description: U.intl.string(U.t.zSyDdH),
            binds: ['f'],
            group: 'MESSAGE'
        });
    let { enabled: t, inInbox: n } = r.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
    return (
        t &&
            !n &&
            e.push({
                description: U.intl.string(U.t.IWNSoK),
                binds: z(V.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        e
    );
}
let K = 12633 == n.j ? Y : null;
