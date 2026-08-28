s.d(e, { jP: () => u, gB: () => p, yB: () => i });
var c = s(582128),
    o = s(17928),
    r = s(775602),
    a = s(652525);
let n = "custom-cursors-styles",
    u = "custom-cursors",
    l = `
  :root {
    --custom-cursor: url(https://cdn.discordapp.com/assets/content/9f04e9b5b7689dbbecc8fbd15acc438f7f4af98592ee506716a71b2fcdc94e53.png) 8 4, auto;
    --custom-cursor-pointer: url(https://cdn.discordapp.com/assets/content/56cf15abd8c5bb2692721be700d1e934d6626590a316b1c23fdce48d5be6c225.png) 4 4, pointer;
  }

  .${u},
  .${u} [class*='BalanceWidgetMenu'] {
    cursor: var(--custom-cursor) !important;
  }

  /* Interactive elements get pointer cursor */
  .${u} button,
  .${u} [role='button'],
  .${u} a,
  .${u} input[type='button'],
  .${u} input[type='submit'],
  .${u} input[type='reset'],
  .${u} [role='menuitem'],
  .${u} [role='option'],
  .${u} [role='listitem'],
  .${u} [role='tab'],
  .${u} [role='radio'],
  .${u} [role='checkbox'],
  .${u} input[type='checkbox'],
  .${u} input[type='radio'],
  .${u} .menu-item,
  .${u} .dropdown-item,
  .${u} .select-option,
  .${u} .list-item,
  .${u} [style*='cursor: pointer'],
  .${u} [class*='cursor-pointer'],
  .${u} [class*='shopCard'],
  .${u} [class*='Card'],
  .${u} [class*='FeaturedCollection'],
  .${u} [class*='FeaturedChip'],
  .${u} [class*='FeaturedProduct'],
  .${u} [class*='productCardContainer'],
  .${u} [class*='collectiblesShopHeaderBar'],
  .${u} [class*='wrapper'],
  .${u} [class*='menu'],
  .${u} [class*='menuItem'],
  .${u} [class*='select'],
  .${u} [class*='option'],
  .${u} [class*='popout'],
  .${u} [class*='searchInput'],
  .${u} [class*='searchInputContainer'],
  .${u} [class*='searchInputContainerInput'],
  .${u} [class*='searchInputContainerIcon'],
  .${u} [class*='checkboxWrapper'],
  .${u} [class*='checkbox'],
  .${u} [class*='input'],
  .${u} [class*='label'],
  .${u} [class*='labelClickable'] {
    cursor: var(--custom-cursor-pointer) !important;
  }
`;
function p() {
    let t = i("useCustomCursorsCSS");
    c.useLayoutEffect(() => {
        if (!t) return;
        let e = document.getElementById(n);
        return (
            null == e && (((e = document.createElement("style")).id = n), document.head.appendChild(e)),
            (e.textContent = l),
            () => {
                e.textContent = "";
            }
        );
    }, [t]);
}
function i(t) {
    let e = (0, a.t)(t),
        s = (0, o.bG)([r.Ay], () => r.Ay.enableCustomCursor ?? !0);
    return e && s;
}
