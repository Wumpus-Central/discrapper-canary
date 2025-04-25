n.d(t, {
    Q2: () => V,
    Rv: () => W,
    U6: () => F,
    UD: () => G,
    ZP: () => Y,
    oT: () => z
}),
    n(415506),
    n(539854);
var i,
    r = n(2818),
    s = n(186070),
    l = n(185514),
    a = n(395878),
    o = n(321697),
    c = n(775774),
    d = n(570408),
    u = n(438846),
    m = n(360038),
    p = n(175724),
    g = n(705371),
    h = n(138976),
    f = n(296805),
    b = n(561716),
    _ = n(239748),
    x = n(337482),
    E = n(679080),
    j = n(777019),
    C = n(523147),
    O = n(400332),
    S = n(908552),
    v = n(189509),
    T = n(673553),
    I = n(280492),
    N = n(746887),
    y = n(861007),
    A = n(89028),
    P = n(300644),
    R = n(721383),
    D = n(207234),
    Z = n(997292),
    w = n(743810),
    k = n(620212),
    L = n(188051),
    B = n(547420),
    M = n(981631),
    U = n(388032),
    V = (((i = {}).NAVIGATION = 'NAVIGATION'), (i.CHAT = 'CHAT'), (i.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (i.MISCELLANEOUS = 'MISCELLANEOUS'), (i.MESSAGE = 'MESSAGE'), (i.DND = 'DND'), i);
function G(e) {
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
function F(e) {
    switch (e) {
        case 'MESSAGE':
            return U.intl.string(U.t.iepGDg);
        case 'DND':
            return U.intl.string(U.t.LBsB0d);
        default:
            return null;
    }
}
function H() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = z[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let z = {
    [M.EkH.SERVER_NEXT]: S.nq,
    [M.EkH.SERVER_PREV]: S.X3,
    [M.EkH.CHANNEL_NEXT]: l.tQ,
    [M.EkH.CHANNEL_PREV]: l.x5,
    [M.EkH.NAVIGATE_BACK]: l.Nx,
    [M.EkH.NAVIGATE_FORWARD]: l.On,
    [M.EkH.UNREAD_NEXT]: w.pd,
    [M.EkH.UNREAD_PREV]: w.wk,
    [M.EkH.MENTION_CHANNEL_NEXT]: w.Nv,
    [M.EkH.MENTION_CHANNEL_PREV]: w.uX,
    [M.EkH.TOGGLE_PREVIOUS_GUILD]: l.$c,
    [M.EkH.JUMP_TO_GUILD]: m.u,
    [M.EkH.SUBMIT]: v.z,
    [M.EkH.TEXTAREA_FOCUS]: T.U,
    [M.EkH.MARK_CHANNEL_READ]: p.f,
    [M.EkH.MARK_SERVER_READ]: g.l,
    [M.EkH.TOGGLE_CHANNEL_PINS]: y.u,
    [M.EkH.TOGGLE_FOR_LATER]: A.f,
    [M.EkH.TOGGLE_INBOX]: D.a,
    [M.EkH.MARK_TOP_INBOX_CHANNEL_READ]: D.M,
    [M.EkH.TOGGLE_USERS]: Z.r,
    [M.EkH.TOGGLE_HELP]: P.O,
    [M.EkH.VIBE_WITH_WUMPUS]: L.w,
    [M.EkH.TOGGLE_MUTE]: I.iN,
    [M.EkH.TOGGLE_DEAFEN]: I.oV,
    [M.EkH.TOGGLE_CATEGORY_COLLAPSED]: N.u,
    [M.EkH.SEARCH_SOUNDBOARD]: C.Z,
    [M.EkH.SCROLL_UP]: x.B2,
    [M.EkH.SCROLL_DOWN]: x.gN,
    [M.EkH.QUICKSWITCHER_SHOW]: b.$,
    [M.EkH.CREATE_DM_GROUP]: a.K,
    [M.EkH.SEARCH_EMOJIS]: E.S,
    [M.EkH.SEARCH_GIFS]: j.O,
    [M.EkH.SEARCH_STICKERS]: O.U,
    [M.EkH.TOGGLE_HOTKEYS]: R._,
    [M.EkH.JUMP_TO_FIRST_UNREAD]: h.O,
    [M.EkH.CREATE_GUILD]: o.r,
    [M.EkH.UPLOAD_FILE]: k.U,
    [M.EkH.RETURN_TO_AUDIO_CHANNEL]: _.F,
    [M.EkH.CALL_ACCEPT]: s.IL,
    [M.EkH.CALL_START]: s.FI,
    [M.EkH.FOCUS_SEARCH]: d.I,
    [M.EkH.JUMP_TO_CURRENT_CALL]: u.K,
    [M.EkH.ZOOM_IN]: B.UF,
    [M.EkH.ZOOM_OUT]: B.RC,
    [M.EkH.ZOOM_RESET]: B.MY,
    [M.EkH.OPEN_APP_DIRECTORY]: f.T,
    [M.EkH.BROWSER_DEVTOOLS]: c.p
};
function W() {
    let e = [
            {
                description: U.intl.string(U.t.bx4Uy8),
                binds: H(M.EkH.SERVER_PREV, M.EkH.SERVER_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t['+Wem6u']),
                binds: H(M.EkH.CHANNEL_PREV, M.EkH.CHANNEL_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t['+2fcd3']),
                binds: H(M.EkH.NAVIGATE_BACK, M.EkH.NAVIGATE_FORWARD),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t.eVmj1N),
                binds: H(M.EkH.UNREAD_PREV, M.EkH.UNREAD_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t.EcqS7e),
                binds: H(M.EkH.MENTION_CHANNEL_PREV, M.EkH.MENTION_CHANNEL_NEXT),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t['4I3pwc']),
                binds: H(M.EkH.JUMP_TO_CURRENT_CALL),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t['Bqss7+']),
                binds: H(M.EkH.TOGGLE_PREVIOUS_GUILD),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t.yYsRlJ),
                binds: H(M.EkH.QUICKSWITCHER_SHOW),
                group: 'NAVIGATION'
            },
            {
                description: U.intl.string(U.t.O7ouXF),
                binds: H(M.EkH.CREATE_GUILD),
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
                binds: H(M.EkH.MARK_SERVER_READ),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['5X9vFh']),
                binds: H(M.EkH.MARK_CHANNEL_READ),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.wxQFsr),
                binds: H(M.EkH.CREATE_DM_GROUP),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['C+XV7e']),
                binds: H(M.EkH.TOGGLE_CHANNEL_PINS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['Q+YV/f']),
                binds: H(M.EkH.TOGGLE_INBOX),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['YEjV+f']),
                binds: H(M.EkH.MARK_TOP_INBOX_CHANNEL_READ),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.AcBI9f),
                binds: H(M.EkH.TOGGLE_USERS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.JoxNnp),
                binds: H(M.EkH.SEARCH_EMOJIS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['3PHxo6']),
                binds: H(M.EkH.SEARCH_GIFS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.YFl7eX),
                binds: H(M.EkH.SEARCH_STICKERS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.L3RYYG),
                binds: H(M.EkH.SCROLL_UP, M.EkH.SCROLL_DOWN),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t['3HAurK']),
                binds: H(M.EkH.JUMP_TO_FIRST_UNREAD),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.rrYBEh),
                binds: H(M.EkH.TEXTAREA_FOCUS),
                group: 'CHAT'
            },
            {
                description: U.intl.string(U.t.sUJlPD),
                binds: H(M.EkH.UPLOAD_FILE),
                group: 'CHAT',
                groupEnd: !0
            },
            {
                description: U.intl.string(U.t.tL6eVV),
                binds: H(M.EkH.TOGGLE_MUTE),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: U.intl.string(U.t['QXe/7e']),
                binds: H(M.EkH.TOGGLE_DEAFEN),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: U.intl.string(U.t.d6UIio),
                binds: H(M.EkH.CALL_ACCEPT),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: U.intl.string(U.t.IcEW09),
                binds: H(M.EkH.MARK_CHANNEL_READ),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: U.intl.string(U.t.WN2dsb),
                binds: H(M.EkH.CALL_START),
                group: 'VOICE_AND_VIDEO',
                groupEnd: !0
            },
            {
                description: U.intl.string(U.t.rUK0kp),
                binds: H(M.EkH.SEARCH_SOUNDBOARD),
                group: 'VOICE_AND_VIDEO'
            },
            {
                description: U.intl.string(U.t.vkGkSk),
                binds: H(M.EkH.TOGGLE_HELP),
                group: 'MISCELLANEOUS'
            },
            {
                description: U.intl.string(U.t['FJvZ8/']),
                binds: H(M.EkH.FOCUS_SEARCH),
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
                description: U.intl.string(U.t.zSyDdH),
                binds: ['f'],
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
                binds: H(M.EkH.VIBE_WITH_WUMPUS),
                group: 'MISCELLANEOUS'
            }
        ],
        { enabled: t, inInbox: n } = r.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
    return (
        t &&
            !n &&
            e.push({
                description: U.intl.string(U.t.IWNSoK),
                binds: H(M.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        e
    );
}
let Y = 12633 == n.j ? z : null;
