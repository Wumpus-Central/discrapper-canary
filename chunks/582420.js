(l.d(t, { startDoggoGame: () => ep }), l(321073));
var i,
    o = l(506774);
let n = `
'''''''''TTTTTTTTTTTTT'''''''''
'''''''''TTTTTTTTTTTTT'''''''''
'''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''
''''''m-----------------,''''''
'''''']                 [''''''
'''''']                 [''''''
LL'''']                 [''''RR
LL'''']                 [''''RR
LL'''']                 [''''RR
LL'''']                 [''''RR
LL'''']                 [''''RR
LL'''']                 [''''RR
LL'''']        d        [''''RR
LL'''']                 [''''RR
LL'''']                 [''''RR
LL'''']                 [''''RR
LL'''']                 [''''RR
LL'''']                 [''''RR
LL'''']                 [''''RR
'''''']        h        [''''''
'''''']                 [''''''
''''''/-----------------.''''''
'''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''
'''''''''BBBBBBBBBBBBB'''''''''
'''''''''BBBBBBBBBBBBB'''''''''
`.slice(1, -1),
    r = n.split("\n"),
    a = {
        tileSize: 8,
        levelAscii: n,
        screenTilesWidth: r[0].length,
        screenTilesHeight: r.length,
        screenOffsetY: 2,
        waves: [
            [{ wait: 180 }, { bottom: 3, wait: 1 }],
            [
                { bottom: 3, wait: 120 },
                { bottom: 3, wait: 120 },
                { bottom: 3, wait: 1 },
            ],
            [
                { type: "rat", left: 1, wait: 1 },
                { bottom: 5, wait: 1 },
            ],
            [
                { type: "rat", right: 3, wait: 1 },
                { top: 5, wait: 1 },
            ],
        ],
    },
    s = {
        zombie: {
            moveInterval: 60,
            target: "dog",
            hearts: 1,
            value: 1,
            avoids: new Set(),
            kills: new Set(["human", "dog"]),
        },
        rat: {
            moveInterval: 30,
            target: "player",
            hearts: 1,
            value: 2,
            avoids: new Set(["dog"]),
            kills: new Set(["human"]),
        },
        skeleton: {
            moveInterval: 60,
            target: "dog",
            hearts: 2,
            value: 2,
            avoids: new Set(),
            kills: new Set(["human", "dog"]),
        },
    },
    u = new Set(Object.keys(s)),
    p = ["left", "right", "top", "bottom"],
    h = [
        { id: "hp_up", name: "hp up", description: "add one heart" },
        { id: "doggo_up", name: "doggo up", description: "add one heart to doggo" },
        { id: "range_up", name: "range up", description: "add one tile of knife range" },
        { id: "wall_up", name: "wall up", description: "add 3 wall  press e" },
        { id: "turbo_axe", name: "turbo axe", description: "press q", rare: !0 },
        { id: "extra_knife", name: "extra knife", description: "+1 knife", rare: !0 },
        { id: "transmog", name: "transmog", description: "dog becomes a cat", rare: !0 },
    ],
    c = Object.fromEntries(h.map((e) => [e.id, e])),
    d = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
    ];
class f {
    items = [];
    priorities = [];
    get size() {
        return this.items.length;
    }
    push(e, t) {
        (this.items.push(e), this.priorities.push(t));
        let l = this.items.length - 1;
        for (; l > 0;) {
            let e = (l - 1) >> 1;
            if (this.priorities[e] <= this.priorities[l]) break;
            (this.swap(e, l), (l = e));
        }
    }
    pop() {
        let e = this.items[0],
            t = this.items[this.items.length - 1],
            l = this.priorities[this.priorities.length - 1];
        if ((this.items.pop(), this.priorities.pop(), 0 === this.items.length)) return e;
        ((this.items[0] = t), (this.priorities[0] = l));
        let i = 0;
        for (;;) {
            let e = 2 * i + 1,
                t = e + 1,
                l = i;
            if (
                (e < this.items.length && this.priorities[e] < this.priorities[l] && (l = e),
                t < this.items.length && this.priorities[t] < this.priorities[l] && (l = t),
                l === i)
            )
                break;
            (this.swap(i, l), (i = l));
        }
        return e;
    }
    swap(e, t) {
        let l = this.items[e];
        ((this.items[e] = this.items[t]), (this.items[t] = l));
        let i = this.priorities[e];
        ((this.priorities[e] = this.priorities[t]), (this.priorities[t] = i));
    }
}
function g(e, t, l) {
    return (Math.abs(l[0] - e) + Math.abs(l[1] - t)) * 2;
}
var y = l(400492);
let w = [
        "doggo_bark",
        "doggo_dog_death",
        "doggo_cat",
        "doggo_slash",
        "doggo_death",
        "doggo_zombie",
        "doggo_rat",
        "doggo_skeleton",
        "doggo_zombie_hit",
        "doggo_rat_hit",
        "doggo_skeleton_hit",
        "doggo_human_hit",
        "doggo_skeleton_die",
        "doggo_dog_hurt",
        "doggo_cat_hurt",
    ],
    m = (0, y.Qh)("doggo_music", "doggo_music", 0.35),
    v = [];
function k(e) {
    (0, y.Ak)(e, 0.5);
}
function _(e) {
    m.setPlaybackRate?.(e ? 0.5 : 1);
}
let T = Object.keys(s).filter((e) => s[e].value > 1);
function b(e) {
    if (0 !== e.length) return e[Math.floor(Math.random() * e.length)];
}
let S = "doggo_high_score",
    M = { zombie: "doggo_zombie", rat: "doggo_rat", skeleton: "doggo_skeleton" },
    x = { zombie: "doggo_zombie_hit", rat: "doggo_rat_hit", skeleton: "doggo_skeleton_hit", human: "doggo_human_hit" },
    L = { human: "doggo_death", skeleton: "doggo_skeleton_die" },
    R = new Set(),
    z = new Set();
var I =
    (((i = {}).HORIZONTAL = "horizontal"),
    (i.VERTICAL_R = "vertical_r"),
    (i.VERTICAL_L = "vertical_l"),
    (i.TOP_LEFT = "top_left"),
    (i.TOP_RIGHT = "top_right"),
    (i.BOTTOM_RIGHT = "bottom_right"),
    (i.BOTTOM_LEFT = "bottom_left"),
    (i.T_RIGHT = "t_right"),
    (i.T_LEFT = "t_left"),
    i);
function A(e) {
    var t;
    return ((t = e.type), u.has(t));
}
function B(e, t, l) {
    return t < 0 || t >= e.level[0].length || l < 0 || l >= e.level.length;
}
function O(e, t) {
    let l = e.level[t.pos[1]][t.pos[0]],
        i = l.entities.indexOf(t);
    -1 !== i && l.entities.splice(i, 1);
}
function H(e, t, l, i) {
    (O(e, t), e.level[i][l].entities.push(t), (t.pos = [l, i]));
}
function W(e, t, l, i) {
    if (B(e, l, i)) return { passable: !1, blocker: null };
    let o = ["tombstone", "spawner", "axe"];
    for (let n of e.level[i][l].entities)
        if (!o.includes(n.type)) {
            if ("knife" === t.type)
                return { passable: !0, blocker: u.has(n.type) || "swirl" === n.type || "dog" === n.type ? n : null };
            return { passable: !1, blocker: n };
        }
    return { passable: !0, blocker: null };
}
function E(e, t, l) {
    (l === t.player && (t.player = null), l === t.dog) &&
        ((t.dog = null),
        (t.tileset = "mono"),
        _(!0),
        k(l.cat ? "doggo_cat" : "doggo_dog_death"),
        t.waveDisplay <= t.highScore ||
            ((t.highScore = t.waveDisplay), (t.newHighScore = !0), o.w.set(S, t.waveDisplay)));
    let i = L[l.type];
    (null != i && P(i),
        O(t, l),
        t.level[l.pos[1]][l.pos[0]].entities.push({
            type: "swirl",
            orig: l.type,
            pos: [l.pos[0], l.pos[1]],
            creation: t.tick,
            cat: "dog" === l.type && l.cat,
        }));
}
function P(e) {
    R.has(e) || (R.add(e), k(e));
}
function K(e) {
    let t = M[e.type];
    null != t && P(t);
}
function C(e, t, l) {
    if (l && (null != L[t.type] || t === e.dog)) return;
    let i = "dog" === t.type ? (t.cat ? "doggo_cat_hurt" : "doggo_dog_hurt") : x[t.type];
    null != i && P(i);
}
function D(e, t, l) {
    l.hearts = l.hearts - 1;
    let i = l.hearts <= 0;
    (C(t, l, i), i && E(e, t, l));
}
function F(e, t, l) {
    t.bump = { tick: e.tick, direction: [Math.sign(l[0] - t.pos[0]), Math.sign(l[1] - t.pos[1])] };
}
function G(e, t, l, i) {
    t.tick - i.lastAttack < 60 || ((i.lastAttack = t.tick), F(t, i, l.pos), K(i), D(e, t, l));
}
function q(e, t, l, i) {
    for (let o of [...t.level[i][l].entities]) A(o) && (P("doggo_slash"), C(t, o, !0), E(e, t, o));
}
function N(e, t, l) {
    if ((t.tick - l.creation) % 3 != 0) return;
    q(e, t, l.pos[0], l.pos[1]);
    let i = l.pos[1] + 1;
    B(t, l.pos[0], i) ? O(t, l) : (H(t, l, l.pos[0], i), q(e, t, l.pos[0], i));
}
function V(e, t, l) {
    if (!u.has(l)) return !0;
    let i = { type: l, pos: [0, 0], creation: e.tick, hearts: s[l].hearts, lastAttack: 0 },
        o = [];
    for (let l of t) W(e, i, l.pos[0], l.pos[1]).passable && o.push(l);
    let n = o[Math.floor(Math.random() * o.length)];
    return null != n && ((i.pos = [n.pos[0], n.pos[1]]), e.level[i.pos[1]][i.pos[0]].entities.push(i), !0);
}
function Y(e) {
    for (let t = e.length - 1; t > 0; t--) {
        let l = Math.floor(Math.random() * (t + 1)),
            i = e[t];
        ((e[t] = e[l]), (e[l] = i));
    }
}
function j(e, t) {
    let l = e.upgradeChoices.length;
    0 !== l && (e.upgradeIndex = (e.upgradeIndex + t + l) % l);
}
function Q(e) {
    let t = [];
    for (let l of e.level) for (let e of l) for (let l of e.entities) t.push(l);
    return t;
}
let U = a.screenTilesWidth * a.tileSize,
    Z = (a.screenTilesHeight + a.screenOffsetY) * a.tileSize,
    $ = new Image(1, 1),
    J = new Image(1, 1),
    X = new Image(1, 1),
    ee = new Image(1, 1);
function et(e, t) {
    return new Promise((l) => {
        e.complete && e.naturalWidth > 0 ? l() : ((e.onload = () => l()), (e.onerror = () => l()), (e.src = t));
    });
}
async function el(e) {
    (await Promise.all([
        et($, "/assets/53015f398accf995.png"),
        et(J, "/assets/d51a3280b56661fb.png"),
        et(X, "/assets/074aa504a4341fe1.png"),
        et(ee, "/assets/617283bd6e882e34.png"),
    ]),
        (e.width = U),
        (e.height = Z));
}
function ei(e, t) {
    let { x: l, y: i, tileIndex: o, rotation: n, tileset: r, alpha: s } = t,
        u = (r.naturalWidth + 1) / (a.tileSize + 1);
    if (!Number.isFinite(u) || u <= 0) return;
    let p = Math.floor(o / u);
    (e.save(),
        (e.globalAlpha = s ?? 1),
        e.translate(l + a.tileSize / 2, i + a.tileSize / 2),
        e.rotate(n),
        e.drawImage(
            r,
            (o % u) * (a.tileSize + 1),
            p * (a.tileSize + 1),
            a.tileSize,
            a.tileSize,
            -a.tileSize / 2,
            -a.tileSize / 2,
            a.tileSize,
            a.tileSize,
        ),
        e.restore());
}
function eo(e) {
    switch (e) {
        case "zombie":
            return 9;
        case "skeleton":
            return 18;
        case "rat":
            return 16;
        case "human":
            return 4;
        case "knife":
            return 46;
        case "axe":
            return 47;
        case "tombstone":
            return 78;
        case "spawner":
            return 44;
        default:
            return 11;
    }
}
function en(e) {
    let t = e.charCodeAt(0);
    return t >= 97 && t <= 122
        ? t - 97
        : t >= 48 && t <= 57
          ? 30 + t - 48
          : "?" === e
            ? 40
            : "!" === e
              ? 41
              : " " === e
                ? 42
                : "*" === e
                  ? 81
                  : "+" === e
                    ? 26
                    : 40;
}
function er(e, t, l, i) {
    let o = e;
    for (let e of l)
        (ei(i, { x: o * a.tileSize, y: t * a.tileSize, tileIndex: en(e), rotation: 0, tileset: X }), (o += 1));
}
function ea(e, t, l) {
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        er(Math.floor(a.screenTilesWidth / 2 - o.length / 2), t + i, o, l);
    }
}
function es(e, t, l, i, o) {
    er(0, i, t, o);
    let n = Math.min(l, 3);
    for (let l = 0; l < n; l++)
        ei(o, {
            x: (t.length + l) * a.tileSize,
            y: i * a.tileSize,
            tileIndex: 66,
            rotation: 0,
            tileset: "mono" === e.tileset ? J : $,
        });
    l > 3 && er(t.length + n, i, "+" + String(l - 3), o);
}
let eu = 1e3 / 60;
function ep(e) {
    let t = e.getContext("2d");
    return null == t
        ? () => {}
        : (function (e, t) {
              let i = { state: null, pressedKeys: new Set() },
                  n = 0,
                  r = !1,
                  y = 0,
                  M = 0;
              function x(l) {
                  for (n = requestAnimationFrame(x), M += Math.min(l - y, 250), y = l; M >= eu;)
                      (!(function (e) {
                          let t,
                              l,
                              i,
                              o,
                              n = e.state;
                          if (null == n || n.upgradeOpen || ((n.tick = n.tick + 1), R.clear(), null == n.dog)) return;
                          if (
                              (function (e) {
                                  for (let t of e.level)
                                      for (let e of t) for (let t of e.entities) if ("axe" === t.type) return !0;
                                  return !1;
                              })(n)
                          ) {
                              for (let t of Q(n)) "axe" === t.type && N(e, n, t);
                              return;
                          }
                          ((t = e.pressedKeys),
                              (l = [0, 0]),
                              (t.has("ArrowLeft") || t.has("KeyA")) && (l = [-1, 0]),
                              (t.has("ArrowRight") || t.has("KeyD")) && (l = [1, 0]),
                              (t.has("ArrowUp") || t.has("KeyW")) && (l = [0, -1]),
                              (t.has("ArrowDown") || t.has("KeyS")) && (l = [0, 1]),
                              (0 !== l[0] || 0 !== l[1]) &&
                                  (function (e, t, l, i) {
                                      if (null == t.player || t.tick - t.lastMoveTick < 9) return;
                                      let o = t.player.direction;
                                      if (!i && (o[0] !== l[0] || o[1] !== l[1])) {
                                          ((t.player.direction = l), (t.lastMoveTick = t.tick));
                                          return;
                                      }
                                      let n = [t.player.pos[0] + l[0], t.player.pos[1] + l[1]],
                                          { passable: r, blocker: a } = W(t, t.player, n[0], n[1]);
                                      (r && (H(t, t.player, n[0], n[1]), (t.lastMoveTick = t.tick)),
                                          null != a && A(a) && G(e, t, t.player, a));
                                  })(e, n, l, t.has("ShiftLeft") || t.has("ShiftRight")),
                              t.has("Space") &&
                                  (function (e) {
                                      var t, l;
                                      let i,
                                          o = e.player;
                                      if (null == o || e.tick - e.lastShotTick < 24) return;
                                      (k("doggo_slash"), (e.lastShotTick = e.tick));
                                      let n = o.range,
                                          r = e.level[o.pos[1]][o.pos[0]];
                                      for (let a of ((t = o.direction),
                                      (l = o.knives),
                                      (i = [
                                          [t[0], t[1]],
                                          [-t[0], -t[1]],
                                          [t[1], -t[0]],
                                          [-t[1], t[0]],
                                      ]).slice(0, Math.min(Math.max(l, 1), i.length))))
                                          r.entities.push({
                                              type: "knife",
                                              pos: [o.pos[0], o.pos[1]],
                                              creation: e.tick,
                                              direction: a,
                                              moved: 0,
                                              range: n,
                                          });
                                  })(n),
                              (i = t.has("KeyE")) &&
                                  !n.wallKeyHeld &&
                                  (function (e) {
                                      let t = e.player;
                                      if (null == t || t.walls <= 0) return;
                                      let l = t.direction,
                                          i = [t.pos[0] + l[0], t.pos[1] + l[1]],
                                          o = { type: "wall", wallType: "horizontal", pos: i, creation: e.tick };
                                      W(e, o, i[0], i[1]).passable &&
                                          ((t.walls = t.walls - 1), e.level[i[1]][i[0]].entities.push(o));
                                  })(n),
                              (n.wallKeyHeld = i),
                              (o = t.has("KeyQ")) &&
                                  !n.axeKeyHeld &&
                                  (function (e) {
                                      let t = e.player;
                                      if (null == t || !t.turboAxe) return;
                                      t.turboAxe = !1;
                                      let l = e.level[0];
                                      for (let t = 0; t < l.length; t++)
                                          l[t].entities.push({ type: "axe", pos: [t, 0], creation: e.tick });
                                  })(n),
                              (n.axeKeyHeld = o),
                              (function (e) {
                                  let t = e.dog;
                                  if (null == t || (e.tick - t.creation) % 600 != 0) return;
                                  let l = [
                                          [0, 1],
                                          [1, 0],
                                          [0, -1],
                                          [-1, 0],
                                      ],
                                      i = l[Math.floor(Math.random() * l.length)],
                                      o = [t.pos[0] + i[0], t.pos[1] + i[1]];
                                  Math.abs(o[0] - e.dogHome[0]) > 1 ||
                                      Math.abs(o[1] - e.dogHome[1]) > 1 ||
                                      (W(e, t, o[0], o[1]).passable && H(e, t, o[0], o[1]));
                              })(n));
                          let r = Q(n);
                          for (let t of r)
                              n.level[t.pos[1]][t.pos[0]].entities.includes(t) &&
                                  ("swirl" === t.type &&
                                      n.tick - t.creation > 120 &&
                                      (O(n, t),
                                      n.level[t.pos[1]][t.pos[0]].entities.push({
                                          type: "tombstone",
                                          pos: t.pos,
                                          creation: n.tick,
                                      })),
                                  "tombstone" === t.type && n.tick - t.creation > 2400 && O(n, t),
                                  A(t) &&
                                      (function (e, t, l) {
                                          let i = s[l.type];
                                          if ((t.tick - l.creation) % i.moveInterval != 0) return;
                                          let o = ("player" === i.target ? t.player : t.dog) ?? t.dog;
                                          if (null == o) return;
                                          let n = o === t.dog,
                                              r = (function (e, t, l, i) {
                                                  let o = e.level.length,
                                                      n = e.level[0].length,
                                                      r = t.pos[1] * n + t.pos[0],
                                                      a = l[1] * n + l[0];
                                                  if (r === a) return null;
                                                  let s = (function (e, t, l, i, o) {
                                                          let n = [];
                                                          for (let e = 0; e < o; e++) n.push(Array(i).fill(0));
                                                          for (let r of e.level)
                                                              for (let e of r)
                                                                  for (let r of e.entities)
                                                                      if (
                                                                          (l.has(r.type) &&
                                                                              (n[r.pos[1]][r.pos[0]] += 200),
                                                                          u.has(r.type) && r !== t)
                                                                      )
                                                                          for (
                                                                              let e = r.pos[1] - 1;
                                                                              e <= r.pos[1] + 1;
                                                                              e++
                                                                          )
                                                                              for (
                                                                                  let t = r.pos[0] - 1;
                                                                                  t <= r.pos[0] + 1;
                                                                                  t++
                                                                              )
                                                                                  t < 0 ||
                                                                                      t >= i ||
                                                                                      e < 0 ||
                                                                                      e >= o ||
                                                                                      (n[e][t] += 3);
                                                          return n;
                                                      })(e, t, i, n, o),
                                                      p = Array(n * o).fill(1 / 0),
                                                      h = Array(n * o).fill(-1),
                                                      c = Array(n * o).fill(!1),
                                                      y = new f();
                                                  for (p[r] = 0, y.push(r, g(t.pos[0], t.pos[1], l)); y.size > 0;) {
                                                      let i = y.pop();
                                                      if (i === a) break;
                                                      if (c[i]) continue;
                                                      c[i] = !0;
                                                      let r = i % n,
                                                          f = (i - r) / n;
                                                      for (let [a, w] of d) {
                                                          let d = r + a,
                                                              m = f + w;
                                                          if (d < 0 || d >= n || m < 0 || m >= o) continue;
                                                          let v = m * n + d;
                                                          if (c[v]) continue;
                                                          let k =
                                                              p[i] +
                                                              (function (e, t, l, i, o) {
                                                                  let n = 2 + l[o][i];
                                                                  for (let l of e.level[o][i].entities) {
                                                                      if (u.has(l.type)) {
                                                                          n += 8;
                                                                          continue;
                                                                      }
                                                                      switch (l.type) {
                                                                          case "wall":
                                                                              n += 12 * (t.blockedBy?.blocker !== l);
                                                                              break;
                                                                          case "swirl":
                                                                              n += 8;
                                                                      }
                                                                  }
                                                                  return n;
                                                              })(e, t, s, d, m);
                                                          k >= p[v] ||
                                                              ((p[v] = k), (h[v] = i), y.push(v, k + g(d, m, l)));
                                                      }
                                                  }
                                                  if (-1 === h[a]) return null;
                                                  let w = a;
                                                  for (; h[w] !== r;) if (-1 === (w = h[w])) return null;
                                                  let m = w % n;
                                                  return [m, (w - m) / n];
                                              })(t, l, o.pos, n ? z : i.avoids);
                                          if (null == r) return;
                                          let { passable: a, blocker: p } = W(t, l, r[0], r[1]);
                                          (a && H(t, l, r[0], r[1]), null != p) &&
                                              ("wall" === p.type &&
                                                  (K(l),
                                                  F(t, l, p.pos),
                                                  l.blockedBy?.blocker === p
                                                      ? t.tick - l.blockedBy.tick > 60 && (O(t, p), delete l.blockedBy)
                                                      : (l.blockedBy = { tick: t.tick, blocker: p })),
                                              (A(p) || "dog" === p.type || "human" === p.type) &&
                                                  (i.kills.has(p.type) || (n && p === t.dog)) &&
                                                  G(e, t, p, l));
                                      })(e, n, t),
                                  "knife" === t.type &&
                                      (function (e, t, l) {
                                          if ((t.tick - l.creation) % Math.floor(6) != 0) return;
                                          if (l.moved >= l.range) return O(t, l);
                                          let i = [l.pos[0] + l.direction[0], l.pos[1] + l.direction[1]];
                                          if (B(t, i[0], i[1])) return O(t, l);
                                          let { passable: o, blocker: n } = W(t, l, i[0], i[1]);
                                          if (
                                              (o && H(t, l, i[0], i[1]),
                                              null != n && ("swirl" === n.type || "dog" === n.type))
                                          )
                                              return O(t, l);
                                          if (null != n && A(n)) {
                                              (O(t, l), D(e, t, n));
                                              return;
                                          }
                                          l.moved = l.moved + 1;
                                      })(e, n, t),
                                  "axe" === t.type && N(e, n, t));
                          !(function (e, t) {
                              let l,
                                  i = { top: [], bottom: [], left: [], right: [] };
                              for (let e of t) "spawner" === e.type && i[e.side].push(e);
                              if (
                                  (!(function (e, t) {
                                      if (0 === e.pendingSpawns.length) return;
                                      let l = [];
                                      for (let i of e.pendingSpawns) V(e, t[i.side], i.type) || l.push(i);
                                      e.pendingSpawns = l;
                                  })(e, i),
                                  0 === e.wavePhase)
                              ) {
                                  let l = e.pendingSpawns.length > 0;
                                  for (let e of t)
                                      if (u.has(e.type)) {
                                          l = !0;
                                          break;
                                      }
                                  if (l) {
                                      e.nextWaveTick = e.tick + 180;
                                      return;
                                  }
                                  if (!(e.wave <= 0) && e.upgradeWave !== e.wave && 1) {
                                      ((e.upgradeOpen = !0),
                                          (e.upgradeIndex = 0),
                                          (e.upgradeChoices = (function (e) {
                                              let t = [],
                                                  l = [];
                                              for (let i of h)
                                                  ("turbo_axe" === i.id
                                                      ? e.player?.turboAxe !== !0
                                                      : "extra_knife" === i.id
                                                        ? (e.player?.knives ?? 1) < 4
                                                        : "transmog" !== i.id || e.dog?.cat !== !0) &&
                                                      (!0 === i.rare ? l.push(i.id) : t.push(i.id));
                                              let i = [];
                                              for (let e of (l.length > 0 &&
                                                  0.25 > Math.random() &&
                                                  i.push(l[Math.floor(Math.random() * l.length)]),
                                              Y(t),
                                              t)) {
                                                  if (i.length >= 3) break;
                                                  i.push(e);
                                              }
                                              return (Y(i), i);
                                          })(e)),
                                          (e.upgradeWave = e.wave));
                                      return;
                                  }
                              }
                              if (e.tick < e.nextWaveTick) return;
                              let o =
                                      null != (l = a.waves[e.wave])
                                          ? l
                                          : (null == e.generatedWave &&
                                                (e.generatedWave = (function (e) {
                                                    var t;
                                                    let l = (t = (e - a.waves.length) / 20) < 0 ? 0 : t > 1 ? 1 : t,
                                                        i = (function (e, t) {
                                                            let l = [],
                                                                i = Math.ceil(0.4 * e);
                                                            for (let e = 0; e < i; e++) l.push("zombie");
                                                            let o = e - i,
                                                                n = s.rat.value;
                                                            for (o >= n && (l.push("rat"), (o -= n)); o > 0;) {
                                                                let e = o >= 2 && Math.random() < t ? b(T) : void 0;
                                                                null != e
                                                                    ? (l.push(e), (o -= s[e].value))
                                                                    : (l.push("zombie"), (o -= 1));
                                                            }
                                                            return l;
                                                        })(10 + 3 * Math.max(0, e - a.waves.length), l),
                                                        o = (function (e, t) {
                                                            let l = b(p) ?? "bottom",
                                                                i = p.filter((e) => e !== l),
                                                                o = 0.9 + -0.6000000000000001 * t,
                                                                n = [];
                                                            for (let t = 0; t < e; t++)
                                                                Math.random() < o ? n.push(l) : n.push(b(i) ?? l);
                                                            return n;
                                                        })(i.length, l),
                                                        n = i.map((e, t) => ({ type: e, side: o[t] }));
                                                    for (let e = n.length - 1; e > 0; e--) {
                                                        let t = Math.floor(Math.random() * (e + 1)),
                                                            l = n[e];
                                                        ((n[e] = n[t]), (n[t] = l));
                                                    }
                                                    let r = Math.max(1, Math.min(3, n.length)),
                                                        u = [];
                                                    for (let e = 0; e < r; e++) {
                                                        let t = Math.floor((n.length * e) / r),
                                                            l = Math.floor((n.length * (e + 1)) / r);
                                                        if (l <= t) continue;
                                                        let i = e === r - 1;
                                                        for (let e of (function (e, t) {
                                                            let l = new Map();
                                                            for (let t of e) {
                                                                let e = l.get(t.type);
                                                                (null == e && ((e = {}), l.set(t.type, e)),
                                                                    (e[t.side] = (e[t.side] ?? 0) + 1));
                                                            }
                                                            let i = [];
                                                            for (let [e, t] of l) i.push({ type: e, ...t, wait: 1 });
                                                            let o = i[i.length - 1];
                                                            return (null != o && (o.wait = t), i);
                                                        })(n.slice(t, l), i ? 1 : 120))
                                                            u.push(e);
                                                    }
                                                    return u;
                                                })(e.wave)),
                                            e.generatedWave),
                                  n = o[e.wavePhase];
                              if (null != n) {
                                  for (let t of ((e.waveDisplay = e.wave + 1), p)) {
                                      let l = n[t];
                                      null != l &&
                                          (function (e, t, l, i, o) {
                                              for (let n = 0; n < o; n++)
                                                  V(e, t[l], i) || e.pendingSpawns.push({ type: i, side: l });
                                          })(e, i, t, n.type ?? "zombie", l);
                                  }
                                  ((e.wavePhase = e.wavePhase + 1),
                                      null == o[e.wavePhase] &&
                                          ((e.wavePhase = 0), (e.wave = e.wave + 1), (e.generatedWave = null)),
                                      (e.nextWaveTick = e.tick + n.wait));
                              }
                          })(n, r);
                      })(i),
                          (M -= eu));
                  !(function () {
                      let l, o, n, r;
                      ((t.fillStyle = "black"), t.fillRect(0, 0, e.width, e.height));
                      let s = i.state;
                      if (null == s)
                          return (
                              ee.naturalWidth <= 0 || t.drawImage(ee, Math.floor((U - ee.naturalWidth) / 2), 16),
                              ea(
                                  [
                                      "* doggo defender *",
                                      "",
                                      "",
                                      "the evil necromancer has",
                                      "summoned an unholy army",
                                      "hell bent on destroying",
                                      "your faithful companion",
                                      "",
                                      "do not let him!",
                                      "",
                                      "wasd or arrows to move",
                                      "shift to strafe",
                                      "space to shoot",
                                      "",
                                      "enter to start",
                                  ],
                                  10,
                                  t,
                              )
                          );
                      ((function (e, t, l) {
                          let i = e.level,
                              o = "mono" === e.tileset ? J : $,
                              n = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2][Math.floor(e.tick / 12) % 4];
                          for (let r = 0; r < i.length; r++) {
                              let s = i[r];
                              for (let i = 0; i < s.length; i++) {
                                  let u = (0 + i) * a.tileSize,
                                      p = (t + r) * a.tileSize;
                                  for (let t of (ei(l, { x: u, y: p, tileIndex: 11, rotation: 0, tileset: $ }),
                                  s[i].entities)) {
                                      let i = (function (e) {
                                              switch (e.type) {
                                                  case "wall":
                                                      switch (e.wallType) {
                                                          case I.HORIZONTAL:
                                                              return 1;
                                                          case I.VERTICAL_R:
                                                              return 13;
                                                          case I.VERTICAL_L:
                                                              return 10;
                                                          case I.TOP_RIGHT:
                                                              return 3;
                                                          case I.TOP_LEFT:
                                                              return 0;
                                                          case I.BOTTOM_RIGHT:
                                                              return 23;
                                                          case I.BOTTOM_LEFT:
                                                              return 20;
                                                          case I.T_RIGHT:
                                                              return 51;
                                                          case I.T_LEFT:
                                                              return 50;
                                                      }
                                                      return;
                                                  case "skeleton":
                                                      return e.hearts <= 1 ? 18 : 8;
                                                  case "swirl":
                                                      if ("dog" === e.orig) return e.cat ? 25 : 15;
                                                      return eo(e.orig);
                                                  case "dog":
                                                      return e.cat ? 25 : 15;
                                                  default:
                                                      return eo(e.type);
                                              }
                                          })(t),
                                          r = "knife" === t.type || "swirl" === t.type || "axe" === t.type ? n : 0,
                                          a = o;
                                      "swirl" === t.type && "dog" === t.orig ? (a = $) : null == e.dog && (r = 0);
                                      let s =
                                              "tombstone" === t.type
                                                  ? (function (e, t) {
                                                        let l = e.tick - t.creation;
                                                        return l <= 1800 ? 1 : Math.max(0, 1 - (l - 1800) / 600);
                                                    })(e, t)
                                                  : 1,
                                          h = (function (e, t) {
                                              if (!A(t)) return [0, 0];
                                              let l = t.bump;
                                              return null == l || e.tick - l.tick >= 2
                                                  ? [0, 0]
                                                  : [2 * l.direction[0], 2 * l.direction[1]];
                                          })(e, t);
                                      ei(l, {
                                          x: u + h[0],
                                          y: p + h[1],
                                          tileIndex: i,
                                          rotation: r,
                                          tileset: a,
                                          alpha: s,
                                      });
                                  }
                              }
                          }
                          (!(function (e, t, l) {
                              let i = e.player;
                              if (null == i) return;
                              let o = i.direction,
                                  n = i.pos[0] + o[0],
                                  r = i.pos[1] + o[1];
                              !(n < 0) &&
                                  !(n >= a.screenTilesWidth) &&
                                  !(r < 0) &&
                                  !(r >= a.screenTilesHeight) &&
                                  ei(l, {
                                      x: (0 + n) * a.tileSize,
                                      y: (t + r) * a.tileSize,
                                      tileIndex: 63,
                                      rotation:
                                          1 === o[0]
                                              ? 0
                                              : 1 === o[1]
                                                ? Math.PI / 2
                                                : -1 === o[0]
                                                  ? Math.PI
                                                  : (3 * Math.PI) / 2,
                                      tileset: "mono" === e.tileset ? J : $,
                                  });
                          })(e, t, l),
                              (function (e, t, l) {
                                  let i = e.player;
                                  if (null == i || null == e.dog || !i.turboAxe || Math.floor(e.tick / 15) % 2 != 0)
                                      return;
                                  let o = i.pos[1] - 1;
                                  o < 0 ||
                                      ei(l, {
                                          x: (0 + i.pos[0]) * a.tileSize,
                                          y: (t + o) * a.tileSize,
                                          tileIndex: en("q"),
                                          rotation: 0,
                                          tileset: X,
                                      });
                              })(e, t, l));
                      })(s, a.screenOffsetY, t),
                          (l = "wave " + String(s.waveDisplay).padStart(4, "0")),
                          er(a.screenTilesWidth - l.length, 0, l, t),
                          (o = "hiscore " + String(s.highScore).padStart(4, "0")),
                          er(a.screenTilesWidth - o.length, 1, o, t),
                          (n = s.player?.walls ?? 0) > 0 && er(12, 0, "wall " + String(n).padStart(2, "0"), t),
                          es(s, "hp    ", s.player?.hearts ?? 0, 0, t),
                          es(s, "doggo ", s.dog?.hearts ?? 0, 1, t),
                          s.upgradeOpen &&
                              (function (e, t) {
                                  let l = [];
                                  for (let t of e.upgradeChoices) {
                                      let e = c[t];
                                      null != e && l.push(e);
                                  }
                                  let i = 0;
                                  for (let e of l) i = Math.max(i, e.name.length);
                                  let o = ["wave " + String(e.waveDisplay) + " cleared", "choose an upgrade", ""];
                                  for (let t = 0; t < l.length; t++) {
                                      let n = t === e.upgradeIndex ? "*" : " ";
                                      o.push(n + " " + l[t].name.padEnd(i, " ") + " " + n);
                                  }
                                  let n = l[e.upgradeIndex];
                                  o.push("", null != n ? n.description : "", "", "enter to confirm");
                                  let r = Math.floor((a.screenTilesHeight + a.screenOffsetY) / 2 - o.length / 2);
                                  ea(o, r, t);
                              })(s, t),
                          null == s.dog &&
                              ((r = ["the necromancer got him!", "enter to restart", ""]),
                              s.newHighScore && r.push("new high score!"),
                              ea(r, 2, t)));
                  })();
              }
              function L(e) {
                  let t;
                  if (
                      (e.preventDefault(),
                      i.pressedKeys.add(e.code),
                      null != (t = i.state) &&
                          t.upgradeOpen &&
                          !e.repeat &&
                          (("ArrowUp" === e.code || "KeyW" === e.code) && j(t, -1),
                          ("ArrowDown" === e.code || "KeyS" === e.code) && j(t, 1)),
                      "Enter" === e.code)
                  ) {
                      let e = i.state;
                      if (null == e)
                          return void (_(!1),
                          m.loop(),
                          (i.state = (function () {
                              let e,
                                  t = [],
                                  l = null,
                                  i = null;
                              for (let e of a.levelAscii.split("\n")) {
                                  let o = [];
                                  for (let n of e) {
                                      let e = (function (e, t) {
                                              let l = { pos: t, creation: 0 };
                                              switch (e) {
                                                  case "-":
                                                      return { ...l, type: "wall", wallType: "horizontal" };
                                                  case "[":
                                                      return { ...l, type: "wall", wallType: "vertical_r" };
                                                  case "]":
                                                      return { ...l, type: "wall", wallType: "vertical_l" };
                                                  case "m":
                                                      return { ...l, type: "wall", wallType: "top_left" };
                                                  case ",":
                                                      return { ...l, type: "wall", wallType: "top_right" };
                                                  case ".":
                                                      return { ...l, type: "wall", wallType: "bottom_right" };
                                                  case "/":
                                                      return { ...l, type: "wall", wallType: "bottom_left" };
                                                  case "<":
                                                      return { ...l, type: "wall", wallType: "t_right" };
                                                  case ">":
                                                      return { ...l, type: "wall", wallType: "t_left" };
                                                  case "z":
                                                      return { ...l, type: "zombie", hearts: 1, lastAttack: 0 };
                                                  case "r":
                                                      return { ...l, type: "rat", hearts: 1, lastAttack: 0 };
                                                  case "d":
                                                      return { ...l, type: "dog", hearts: 1, cat: !1 };
                                                  case "h":
                                                      return {
                                                          ...l,
                                                          type: "human",
                                                          direction: [1, 0],
                                                          hearts: 1,
                                                          range: 2,
                                                          walls: 0,
                                                          knives: 1,
                                                          turboAxe: !1,
                                                      };
                                                  case "B":
                                                      return { ...l, type: "spawner", side: "bottom" };
                                                  case "T":
                                                      return { ...l, type: "spawner", side: "top" };
                                                  case "L":
                                                      return { ...l, type: "spawner", side: "left" };
                                                  case "R":
                                                      return { ...l, type: "spawner", side: "right" };
                                                  default:
                                                      return null;
                                              }
                                          })(n, [o.length, t.length]),
                                          r = { entities: [] };
                                      (null != e &&
                                          (r.entities.push(e),
                                          "dog" === e.type && (i = e),
                                          "human" === e.type && (l = e)),
                                          o.push(r));
                                  }
                                  t.push(o);
                              }
                              return {
                                  level: t,
                                  player: l,
                                  dog: i,
                                  tick: 0,
                                  wave: 0,
                                  waveDisplay: 1,
                                  wavePhase: 0,
                                  nextWaveTick: 1,
                                  lastShotTick: -999,
                                  lastMoveTick: -999,
                                  tileset: "color",
                                  dogHome: null != i ? [i.pos[0], i.pos[1]] : [0, 0],
                                  highScore: "number" == typeof (e = o.w.get(S)) && Number.isFinite(e) ? e : 1,
                                  newHighScore: !1,
                                  generatedWave: null,
                                  pendingSpawns: [],
                                  upgradeOpen: !1,
                                  upgradeIndex: 0,
                                  upgradeWave: 0,
                                  upgradeChoices: [],
                                  upgradesTaken: [],
                                  wallKeyHeld: !1,
                                  axeKeyHeld: !1,
                              };
                          })()),
                          k("doggo_bark"));
                      if (null == e.dog) {
                          (_(!1), (i.state = null));
                          return;
                      }
                      if (e.upgradeOpen)
                          return void (function (e) {
                              let t = e.upgradeChoices[e.upgradeIndex],
                                  l = null != t ? c[t] : void 0;
                              if (null != l) {
                                  e.upgradesTaken.push(l.id);
                                  let t = e.player;
                                  null != t &&
                                      ("hp_up" === l.id && (t.hearts = t.hearts + 1),
                                      "range_up" === l.id && (t.range = t.range + 1),
                                      "wall_up" === l.id && (t.walls = t.walls + 3),
                                      "turbo_axe" === l.id && (t.turboAxe = !0),
                                      "extra_knife" === l.id && (t.knives = Math.min(t.knives + 1, 4)));
                                  let i = e.dog;
                                  null != i &&
                                      ("doggo_up" === l.id && (i.hearts = i.hearts + 1),
                                      "transmog" === l.id && (i.cat = !0));
                              }
                              e.upgradeOpen = !1;
                          })(e);
                  }
              }
              function E(e) {
                  i.pressedKeys.delete(e.code);
              }
              function P() {
                  i.pressedKeys.clear();
              }
              if (
                  (document.addEventListener("keydown", L),
                  document.addEventListener("keyup", E),
                  window.addEventListener("blur", P),
                  m.loop(),
                  !(v.length > 0))
              )
                  for (let e of w) {
                      let t = new Audio();
                      ((t.preload = "auto"), (t.src = l(696354)(`./${e}.mp3`)), t.load(), v.push(t));
                  }
              return (
                  el(e)
                      .then(() => {
                          r || ((y = performance.now()), (n = requestAnimationFrame(x)));
                      })
                      .catch(() => {}),
                  () => {
                      ((r = !0),
                          cancelAnimationFrame(n),
                          document.removeEventListener("keydown", L),
                          document.removeEventListener("keyup", E),
                          window.removeEventListener("blur", P),
                          m.stop(),
                          _(!1));
                  }
              );
          })(e, t);
}
