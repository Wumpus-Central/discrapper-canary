r.d(t, { jP: () => i, gB: () => d, yB: () => u });
var n = r(64700),
    s = r(17928),
    o = r(775602),
    l = r(652525);
let a = "custom-cursors-styles",
    i = "custom-cursors",
    c = `
  :root {
    --custom-cursor: url(https://cdn.discordapp.com/assets/content/9f04e9b5b7689dbbecc8fbd15acc438f7f4af98592ee506716a71b2fcdc94e53.png) 8 4, auto;
    --custom-cursor-pointer: url(https://cdn.discordapp.com/assets/content/56cf15abd8c5bb2692721be700d1e934d6626590a316b1c23fdce48d5be6c225.png) 4 4, pointer;
  }

  .${i},
  .${i} [class*='BalanceWidgetMenu'] {
    cursor: var(--custom-cursor) !important;
  }

  /* Interactive elements get pointer cursor */
  .${i} button,
  .${i} [role='button'],
  .${i} a,
  .${i} input[type='button'],
  .${i} input[type='submit'],
  .${i} input[type='reset'],
  .${i} [role='menuitem'],
  .${i} [role='option'],
  .${i} [role='listitem'],
  .${i} [role='tab'],
  .${i} [role='radio'],
  .${i} [role='checkbox'],
  .${i} input[type='checkbox'],
  .${i} input[type='radio'],
  .${i} .menu-item,
  .${i} .dropdown-item,
  .${i} .select-option,
  .${i} .list-item,
  .${i} [style*='cursor: pointer'],
  .${i} [class*='cursor-pointer'],
  .${i} [class*='shopCard'],
  .${i} [class*='Card'],
  .${i} [class*='FeaturedCollection'],
  .${i} [class*='FeaturedChip'],
  .${i} [class*='FeaturedProduct'],
  .${i} [class*='productCardContainer'],
  .${i} [class*='collectiblesShopHeaderBar'],
  .${i} [class*='wrapper'],
  .${i} [class*='menu'],
  .${i} [class*='menuItem'],
  .${i} [class*='select'],
  .${i} [class*='option'],
  .${i} [class*='popout'],
  .${i} [class*='searchInput'],
  .${i} [class*='searchInputContainer'],
  .${i} [class*='searchInputContainerInput'],
  .${i} [class*='searchInputContainerIcon'],
  .${i} [class*='checkboxWrapper'],
  .${i} [class*='checkbox'],
  .${i} [class*='input'],
  .${i} [class*='label'],
  .${i} [class*='labelClickable'] {
    cursor: var(--custom-cursor-pointer) !important;
  }
`;
function d() {
    let e = u("useCustomCursorsCSS");
    n.useLayoutEffect(() => {
        if (!e) return;
        let t = document.getElementById(a);
        return (
            null == t && (((t = document.createElement("style")).id = a), document.head.appendChild(t)),
            (t.textContent = c),
            () => {
                t.textContent = "";
            }
        );
    }, [e]);
}
function u(e) {
    let t = (0, l.t)(e),
        r = (0, s.bG)([o.A], () => o.A.enableCustomCursor ?? !0);
    return t && r;
}
