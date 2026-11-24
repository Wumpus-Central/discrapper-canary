n.d(t, { jP: () => o, gB: () => c, yB: () => d });
var l = n(582128),
    r = n(855986),
    s = n(775602),
    a = n(652525);
let i = "custom-cursors-styles",
    o = "custom-cursors",
    u = `
  :root {
    --custom-cursor: url(https://cdn.discordapp.com/assets/content/7cf4e05a49bc0c1e6f89a5d84cf69ede62a9f0ad5371791a0d5c31128c04dbaa.png) 0 0, auto;
    --custom-cursor-pointer: url(https://cdn.discordapp.com/assets/content/14dd277c591855b8bff2a3052ce12a8f47352829550bfc946f5d5d05e535b832.png) 4 0, pointer;
  }

  .${o},
  .${o} [class*='BalanceWidgetMenu'] {
    cursor: var(--custom-cursor) !important;
  }

  /* Interactive elements get pointer cursor */
  .${o} button,
  .${o} [role='button'],
  .${o} a,
  .${o} input[type='button'],
  .${o} input[type='submit'],
  .${o} input[type='reset'],
  .${o} [role='menuitem'],
  .${o} [role='option'],
  .${o} [role='listitem'],
  .${o} [role='tab'],
  .${o} [role='radio'],
  .${o} [role='checkbox'],
  .${o} input[type='checkbox'],
  .${o} input[type='radio'],
  .${o} .menu-item,
  .${o} .dropdown-item,
  .${o} .select-option,
  .${o} .list-item,
  .${o} [style*='cursor: pointer'],
  .${o} [class*='cursor-pointer'],
  .${o} [class*='shopCard'],
  .${o} [class*='Card'],
  .${o} [class*='FeaturedCollection'],
  .${o} [class*='FeaturedChip'],
  .${o} [class*='FeaturedProduct'],
  .${o} [class*='productCardContainer'],
  .${o} [class*='openableTile'],
  .${o} [class*='wrapper'],
  .${o} [class*='menu'],
  .${o} [class*='menuItem'],
  .${o} [class*='select'],
  .${o} [class*='option'],
  .${o} [class*='popout'],
  .${o} [class*='searchInput'],
  .${o} [class*='searchInputContainer'],
  .${o} [class*='searchInputContainerInput'],
  .${o} [class*='searchInputContainerIcon'],
  .${o} [class*='checkboxWrapper'],
  .${o} [class*='checkbox'],
  .${o} [class*='input'],
  .${o} [class*='label'],
  .${o} [class*='labelClickable'] {
    cursor: var(--custom-cursor-pointer) !important;
  }
`;
function c(e) {
    l.useLayoutEffect(() => {
        if (!e) return;
        let t = document.getElementById(i);
        return (
            null == t && (((t = document.createElement("style")).id = i), document.head.appendChild(t)),
            (t.textContent = u),
            () => {
                t.textContent = "";
            }
        );
    }, [e]);
}
function d(e) {
    let t = (0, a.t)(e),
        n = (0, r.bG)([s.Ay], () => s.Ay.enableCustomCursor ?? !0);
    return t && n;
}
